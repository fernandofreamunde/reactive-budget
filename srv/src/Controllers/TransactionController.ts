import { Request, Response } from "express";
import Transaction from "../Entity/Transaction";
import TransactionRepository from "../repository/TransactionRepository";
import TransactionService from "../Service/TransactionService";

export default {
  async create(request: Request, response: Response) {

    const { date, description, categoryId, bankId, amount } = request.body;
    // // TO DO validade data
    const transactionSercive = new TransactionService();
    const transaction = await transactionSercive.createTransaction(date, description, categoryId, bankId, amount);

    // TODO remove accounty details from response
    return response.status(201).json(transaction);
  },

  async update(request: Request, response: Response)
  {
    const { id } = request.params
    const { date, description, categoryId, bankId, amount } = request.body;
    const transactionRepository = new TransactionRepository();
    const transactionService = new TransactionService();

    let transaction = <Transaction> await transactionRepository.findTransactionById(id);
    transaction = <Transaction> await transactionService.updateTransaction(transaction, date, description, categoryId, bankId, amount);

    return response.status(200).json(transaction);
  },

  async read(request: Request, response: Response) 
  {
    // const { name, shortName } = request.query

    // // push to service
    const transactionService = new TransactionService();
    const transactions = await transactionService.listTransactions();
    
    return response.status(200).json(transactions);
  },

  async delete(request: Request, response: Response)
  {
    const { id } = request.params

    // // // push to service
    const transactionService = new TransactionService();
    await transactionService.deleteTransaction(id);

    return response.status(200).json({message: 'deleted'});
  }
}
