import api from "../services/api";

interface CategoryInput {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default class CategoryResource {

  id?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(category?: CategoryInput) {

    if (category !== undefined) {
      this.id = category.id;
      this.name = category.name;
      this.createdAt = category.createdAt;
      this.updatedAt = category.updatedAt;
    }
  }
  
  /**
   * listCategories
   */
  public async list() {
    let categories:Array<CategoryResource> = [];

    const response = await api.doGet({url:'/category'});

    categories = response.data.map((element:CategoryInput) => {
      return this.createFromResponse(element);
    });

    return categories;
  }

  /**
   * createCategory
   */
  public async create() {
    const response = await api.doPost({url:'/category', data:this.forApi()});
    return this.createFromResponse(response.data);
  }

  /**
   * updateCategory
   */
  public async update() {
    const response = await api.doPut({url:'/category/' + this.id, data:this.forApi()});
    return this.createFromResponse(response.data);
  }

  /**
   * deleteCategory
   */
  public async delete() {
    return await api.doDelete({url:'/category/' + this.id});
  }

  /**
   * getId
   */
  public getId() {
    return this.id;
  }

  /**
   * getName
   */
  public getName() {
    return this.name;
  }

  private createFromResponse(input: CategoryInput) {
    return new CategoryResource(input);
  }

  private forApi() 
  {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
