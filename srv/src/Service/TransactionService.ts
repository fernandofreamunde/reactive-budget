import { getManager } from "typeorm";
import Transaction from "../Entity/Transaction";
import currentAccount from "../Infrastructure/currentAccount";
import TransactionRepository from "../repository/TransactionRepository";
import BankService from "./BankService";
import CategoryService from "./CategoryService";

export default class TransactionService {
  private transactionRepository:TransactionRepository;
  private categoryService:CategoryService;
  private bankService:BankService;

  constructor() {
    this.transactionRepository = new TransactionRepository();
    this.categoryService = new CategoryService();
    this.bankService = new BankService();
  }

  /**
   * createTransaction
   */
  public async createTransaction(date:Date, description:string, categoryId:string, bankId:string, amount:number): Promise<Transaction> 
  {
    const transaction = new Transaction();
    
    transaction.date = date; // CHECK DATE FORMATS....
    transaction.description = description;
    transaction.category = await this.categoryService.getCategoryById(<string> categoryId);
    transaction.bank = await this.bankService.getBankById(<string> bankId);
    transaction.amount = amount;
    transaction.createdAt = new Date();
    transaction.updatedAt = new Date();
    transaction.account = currentAccount.getAccount();

    const em = getManager();
    await em.save(transaction);

    return transaction;
  }

  /**
   * updateTransaction
   */
  public async updateTransaction(transaction:Transaction, date?:Date, description?:string, categoryId?:string, bankId?:string, amount?:number) 
  {

    if (date === null) {
      date = transaction.date;
    }
    if (description === null) {
      description = transaction.description;
    }
    if (categoryId === null) {
      categoryId = transaction.category.id;
    }
    if (bankId === null) {
      bankId = transaction.bank.id;
    }
    if (amount === null) {
      amount = transaction.amount;
    }
    
    transaction.date = <Date> date;
    transaction.description = <string> description;
    transaction.category = await this.categoryService.getCategoryById(<string> categoryId);
    transaction.bank = await this.bankService.getBankById(<string> bankId);
    transaction.amount = <number> amount;
    transaction.updatedAt = new Date();

    const em = getManager();
    await em.save(transaction);
    return transaction;
  }

  /**
   * listTransactions
   */
  public async listTransactions() {

    // todo add filtering later
    const transactions = <Transaction[]> await this.transactionRepository.findAll();

    return transactions;
  }

  /**
   * deleteTransaction
   */
  public async deleteTransaction(transactionId:string)
  {
    const em = getManager();
    await em.delete(Transaction, transactionId);
  }
}
