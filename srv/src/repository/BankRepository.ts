import { EntityManager, getManager, getRepository, Repository } from "typeorm";
import { Bank } from "../Entity/Bank";

export default class BankRepository {
  private repository: Repository<Bank>;
  private entityManager: EntityManager;

  constructor() {
    this.repository = getRepository(Bank);
    this.entityManager = getManager();
  }

  /**
   * findBankByName
   */
  public findBankByName(name:string): Promise<Bank | undefined> {
    return this.entityManager
      .createQueryBuilder(Bank, 'bank')
      .where("bank.name = :name", { name })
      .getOne();
  }

  /**
   * findBankByEmail
   */
  public findBankById(id:string): Promise<Bank | undefined> {
    return this.entityManager
      .createQueryBuilder(Bank, 'bank')
      .where("bank.id = :id", { id })
      .getOne();
  }
}