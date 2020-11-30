import { EntityManager, getManager, getRepository, Repository } from "typeorm";
import currentAccount from "../Infrastructure/currentAccount";
import Transaction from "../Entity/Transaction";

export default class TransactionRepository {
  private repository: Repository<Transaction>;
  private entityManager: EntityManager;

  constructor() {
    this.repository = getRepository(Transaction);
    this.entityManager = getManager();
  }

  /**
   * findBankByName
   */
  public findTransactionByName(name:string): Promise<Transaction | undefined> {
    const accountId = currentAccount.getAccount().id;
    return this.entityManager
      .createQueryBuilder(Transaction, 'transaction')
      .where("transaction.name = :name", { name })
      .andWhere("transaction.account = :accountId", { accountId })
      .getOne();
  }

  /**
   * findBankByEmail
   */
  public findTransactionById(id:string): Promise<Transaction | undefined> {
    const accountId = currentAccount.getAccount().id;
    return this.repository.findOneOrFail(id, {
      relations:['account', 'bank', 'category'],
      where: { account: accountId }
    });
    // return this.entityManager
    //   .createQueryBuilder(Transaction, 'transaction')
    //   .where("transaction.id = :id", { id })
    //   .andWhere("transaction.account = :accountId", { accountId })
    //   .getOne();
  }

  /**
   * findAll
   */
  public async findAll(): Promise<Transaction[] | undefined> {
    const account = currentAccount.getAccount().id;
    return await this.repository.find({
      relations:['bank', 'category'],
      where: { account: account }
    });
    // Leaving this here it can be useful in the future since it works
    // return await this.entityManager
    //   .createQueryBuilder(Transaction, 'transaction')
    //   .andWhere("transaction.account = :account", { account })
    //   .getMany();
  }
}
