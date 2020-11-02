import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import Account from "../Entity/Account";
import AccountRepository from "../repository/AccountRepository";

export default class AccountService {
  constructor() {}

  /**
   * createAccount
   */
  public async createAccount(email:string, password:string): Promise<Account> {
    // todo validate email is unique
    const account = new Account();
    account.email = email;
    account.password = password;
    account.password = bcrypt.hashSync(password, 10);
    // todo format time in a better way
    account.createdAt = new Date().toTimeString();
    account.updatedAt = new Date().toTimeString();

    const em = getManager();
    await em.save(account);

    return account;
  }

  /**
   * authenticate
   */
  public authenticate(email:string, password:string)  {
    // query user by email
    const account = (new AccountRepository()).findAccountByEmail(email);

    account.then(account => {
      const result = account || false;
      if (!result || !this.validPassword(result.password, password)) {
        throw new Error("Invalid Credentials");
      }

      console.log(account);
      return account;
    }).catch(() => {
      throw new Error("Invalid Credentials");
    });
  }

  private validPassword(hashedPassword:string, password:string):boolean {
    return bcrypt.compareSync(hashedPassword, password)
  }
}