import { getManager } from "typeorm";
import Account from "../Entity/Account";
import { Bank } from "../Entity/Bank";
import BankRepository from "../repository/BankRepository";

export default class BankService {
  private bankRepository:BankRepository;

  constructor() {
    this.bankRepository = new BankRepository();
  }

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

  /**
   * updateBank
   */
  public async updateBank(bankId:string, name:string, shortName:string) {
    const bank = <Bank> await this.bankRepository.findBankById(bankId);

    if (name == '') {
      name = bank.name;
    }

    if (shortName == '') {
      shortName = bank.shortName;
    }
    
    bank.name = name;
    bank.shortName = shortName;
    bank.updatedAt = new Date().toTimeString();

    const em = getManager();
    await em.save(bank);
    return bank;
  }
}
