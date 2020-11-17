import { Request, Response } from "express";
import currentAccount from "../Infrastructure/currentAccount";
import BankService from "../Service/BankService";
import CategoryService from "../Service/CategoryService";

export default {
  async create(request: Request, response: Response) {

    const { name } = request.body
    // TO DO validade data
     const categorySercive = new CategoryService();
    
    const account = await currentAccount.getAccount();

    const category = await categorySercive.createCategory(name, account)

    // TODO remove accounty details from response
    return response.status(201).json(category);
  },

  async update(request: Request, response: Response) {

    // validade data
    const { name } = request.body
    const { id } = request.params

    // // push to service
    const categorySercive = new CategoryService();
    const category = await categorySercive.updateCategory(id, name);
    // respond
    //{ id, shortenName, name, user, createdAt, updatedAt }
    return response.status(200).json(category);
  },

  async read(request: Request, response: Response) {
    // const { name, shortName } = request.query

    // // push to service
    const categorySercive = new CategoryService();
    const categories = await categorySercive.listCategories();
    
    return response.status(200).json(categories);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params

    // // push to service
    const categorySercive = new CategoryService();
    await categorySercive.deleteCategory(id);

    return response.status(200).json({message: 'deleted'});
  }
}
