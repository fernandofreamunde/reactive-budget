import { getManager } from "typeorm";
import Account from "../Entity/Account";
import Category from "../Entity/Category";
import CategoryRepository from "../repository/CategoryRepository";

export default class CategoryService {
  private categoryRepository:CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  public async createCategory(name:string, account:Account): Promise<Category> {

    const category = new Category();
    category.name = name;
    category.createdAt = new Date().toTimeString();
    category.updatedAt = new Date().toTimeString();
    category.account = account;

    const em = getManager();
    await em.save(category);

    return category;
  }

  /**
   * updateCategory
   */
  public async updateCategory(categoryId:string, name:string) {
    const category = <Category> await this.categoryRepository.findCategoryById(categoryId);

    if (name == '') {
      name = category.name;
    }
    
    category.name = name;
    category.updatedAt = new Date().toTimeString();

    const em = getManager();
    await em.save(category);
    return category;
  }

  /**
   * listCategories
   */
  public async listCategories() {

    // todo add filtering later
    const categories = <Category[]> await this.categoryRepository.findAll();

    return categories;
  }

  /**
   * updateCategory
   */
  public async deleteCategory(categoryId:string) {

    const em = getManager();
    await em.delete(Category, categoryId);
  }

  /**
   * getCategoryById
   */
  public async getCategoryById(id:string) {
    return <Category> await this.categoryRepository.findCategoryById(id);
  }
}
