import api from "../services/api";

interface TransactionInput {
  id?: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  bank: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class TransactionResource
{
  private id?: string;
  private date?: Date;
  private description?: string;
  private amount?: number;
  private category?: string;
  private bank?: string;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(transaction?: TransactionInput) {

    if (transaction !== undefined) {

      this.id = transaction.id;
      this.date = transaction.date;
      this.description = transaction.description;
      this.amount = transaction.amount;
      this.category = transaction.category;
      this.bank = transaction.bank;
      this.createdAt = transaction.createdAt;
      this.updatedAt = transaction.updatedAt;
    }
  }

  /**
   * getId
   */
  public getId() {
    return this.id;
  }

  /**
   * getDate
   */
  public getDate() {
    return this.date ?? new Date();
  }

  /**
   * getDescription
   */
  public getDescription() {
    return this.description;
  }

  /**
   * getAmount
   */
  public getAmount() {
    return this.amount;
  }

  /**
   * getCategory
   */
  public getCategory() {
    return this.category;
  }

  /**
   * getBank
   */
  public getBank() {
    return this.bank;
  }
  
  /**
   * list
   */
  public async list() {
    let transactions:Array<TransactionResource> = [];

    const response = await await api.doGet({url:'/transaction'});

    transactions = response.data.map((element: TransactionInput) => {
      return this.createFromResponse(element);
    });

    return transactions;
  }

  /**
   * create
   */
  public async create() {
    const response =  await api.doPost({url:'/transaction', data:this.forApi()});
    return this.createFromResponse(response.data);
  }

  /**
   * updateTransaction
   */
  public async updateTransaction() {
    const response =  await api.doPut({url:'/transaction/'+ this.id, data:this.forApi()});
    return this.createFromResponse(response.data);
  }

  /**
   * deleteTransaction
   */
  public async deleteTransaction() {
    return await api.doDelete({url:'/transaction/'+ this.id});
  }

  private createFromResponse(input: TransactionInput) 
  {
    return new TransactionResource(input);
  }

  private forApi() 
  {
    return {
      id: this.id,
      date: this.date,
      description: this.description,
      amount: this.amount,
      category: this.category,
      bank: this.bank,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
