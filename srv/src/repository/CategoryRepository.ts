import { EntityManager, getManager, getRepository, Repository } from "typeorm";
import currentAccount from "../Infrastructure/currentAccount";
import { Category } from "../Entity/Category";

export default class CategoryRepository {
  private repository: Repository<Category>;
  private entityManager: EntityManager;

  constructor() {
    this.repository = getRepository(Category);
    this.entityManager = getManager();
  }

  /**
   * findBankByName
   */
  public findCategoryByName(name:string): Promise<Category | undefined> {
    const accountId = currentAccount.getAccount().id;
    return this.entityManager
      .createQueryBuilder(Category, 'category')
      .where("category.name = :name", { name })
      .andWhere("category.account = :accountId", { accountId })
      .getOne();
  }

  /**
   * findBankByEmail
   */
  public findCategoryById(id:string): Promise<Category | undefined> {
    const accountId = currentAccount.getAccount().id;
    return this.entityManager
      .createQueryBuilder(Category, 'category')
      .where("category.id = :id", { id })
      .andWhere("category.account = :accountId", { accountId })
      .getOne();
  }

  /**
   * findAll
   */
  public async findAll(): Promise<Category[] | undefined> {
    const account = currentAccount.getAccount().id;
    // Leaving this here it can be useful in the future since it works
    // console.log(await this.repository.find({
    //   relations: ['account'],
    //   where: { account: account }
  
    // }))
    return await this.entityManager
      .createQueryBuilder(Category, 'category')
      .andWhere("category.account = :account", { account })
      .getMany();
  }
}
