import { getManager } from "typeorm";
import Account from "../Entity/Account";

export default class AccountService {
  constructor() {}

  /**
   * createAccount
   */
  public async createAccount(email:string, password:string): Promise<Account> {
    // todo validate email is unique
    // hach the password
    const account = new Account();
    account.email = email;
    account.password = password;
    // todo format time in a better way
    account.createdAt = new Date().toTimeString();
    account.updatedAt = new Date().toTimeString();

    const em = getManager();
    await em.save(account);

    return account;
  }
}