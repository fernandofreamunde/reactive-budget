import Account from "../Entity/Account";
import jwt from 'jsonwebtoken';

export default class TokenService {
  constructor() {
    console.log('initiating Token Service');
  }

  /**
   * createToken
   */
  public createToken(account:Account):string {

    const payload = {
      account:account.id,
      expiresIn: process.env.TOKEN_LIFE
    }
    
    const key = process.env.TOKEN_SECRET || '';

    const token = jwt.sign(payload, key, {
      algorithm: "HS256"
    });

    return token;
  }
}

