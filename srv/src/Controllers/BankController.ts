import { Request, Response } from "express";
import currentAccount from "../Infrastructure/currentAccount";
import BankService from "../Service/BankService";

export default {
  async create(request: Request, response: Response) {

    const { shortName, name } = request.body

    const bankSercive = new BankService();
    
    const account = await currentAccount.getAccount();

    const bank = await bankSercive.createBank(name, shortName, account)

    // TODO remove accounty details from response
    return response.status(201).json(bank);
  },

  async update(request: Request, response: Response) {

    // validade data
    // push to service
    // respond
    //{ id, shortenName, name, user, createdAt, updatedAt }
    return response.status(200).json({message: 'wip'});
  },

  async read(request: Request, response: Response) {

    // validade data
    // push to service
    // respond
    //{ id, shortenName, name, user, createdAt, updatedAt }
    return response.status(200).json({message: 'wip'});
  },

  async delete(request: Request, response: Response) {

    // validade data
    // push to service
    // respond
    //{ id, shortenName, name, user, createdAt, updatedAt }
    return response.status(200).json({message: 'wip'});
  }
}
