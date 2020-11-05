import { Request, Response } from "express";
import { emit } from "process";
import { getManager, getRepository } from "typeorm";
import Account from "../Entity/Account";
import { Bank } from "../Entity/Bank";

export default {
  async create(request: Request, response: Response) {

    const { shortName, name } = request.body

    console.log('HERE')
    console.log(shortName)
    console.log(name)

    const bank = new Bank();
    bank.name = name;
    bank.shortName = shortName;
    bank.createdAt = new Date().toTimeString();
    bank.updatedAt = new Date().toTimeString();

    const accountRepo = getRepository(Account);
    bank.account = await accountRepo.findOneOrFail('a6dd640e-d896-4f0b-83d9-c49b755fdeba');

    const em = getManager();
    await em.save(bank);
    // validade data
    // push to service
    // respond
    //{ id, shortName, name, user, createdAt, updatedAt }
    return response.status(201).json({message: 'wip'});
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
