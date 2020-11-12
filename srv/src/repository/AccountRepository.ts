import { EntityManager, getManager, getRepository, Repository } from "typeorm";
import Account from "../Entity/Account";

export default class AccountRepository {
  private repository: Repository<Account>;
  private entityManager: EntityManager;
  constructor() {
    this.repository = getRepository(Account);
    this.entityManager = getManager();
  }

  /**
   * findAccountByEmail
   */
  public findAccountByEmail(email:string): Promise<Account | undefined> {
    return this.entityManager
      .createQueryBuilder(Account, 'account')
      .where("account.email = :email", { email})
      .getOne();
  }

  /**
   * findAccountByEmail
   */
  public findAccountById(id:string): Promise<Account | undefined> {
    return this.entityManager
      .createQueryBuilder(Account, 'account')
      .where("account.id = :id", { id })
      .getOne();
  }
}
