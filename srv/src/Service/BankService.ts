import { getManager } from "typeorm";
import Account from "../Entity/Account";
import { Bank } from "../Entity/Bank";

export default class BankService {
    //private accountRepository:AccountRepository;

  public async createBank(name:string, shortName:string, account:Account): Promise<Bank> {

    const bank = new Bank();
    bank.name = name;
    bank.shortName = shortName;
    bank.createdAt = new Date().toTimeString();
    bank.updatedAt = new Date().toTimeString();
    bank.account = account;

    const em = getManager();
    await em.save(bank);

    return bank;
  }
}