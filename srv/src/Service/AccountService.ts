import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import Account from "../Entity/Account";
import AccountRepository from "../repository/AccountRepository";
import TokenService from "./TokenService";

export default class AccountService {
  private accountRepository:AccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
  }

  /**
   * createAccount
   */
  public async createAccount(email:string, password:string): Promise<Account> {
    // todo validate email is unique
    const account = new Account();
    account.email = email;
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
  public async authenticate(email:string, password:string): Promise<Account | null> {
    // query user by email
    const account = await this.accountRepository.findAccountByEmail(email);

    if (account === undefined) {
      return null;
    }
    
    if (!this.validPassword(password, account.password)) {
      return null;
      //throw new Error("Invalid Credentials");
    }

    return account;
  }

  private validPassword(password:string, hashedPassword:string):boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }
}