import Account from "../Entity/Account";
import jwt from 'jsonwebtoken';

export default class TokenService {
  private secret_key:string;
  constructor() {
    console.log('initiating Token Service');
    this.secret_key = process.env.TOKEN_SECRET || '';
  }

  /**
   * createToken
   */
  public createToken(account:Account):string {

    const now = new Date();

    const life:number = parseInt(process.env.TOKEN_LIFE_IN_MINUTES || '1');

    const payload = {
      account:account.id,
      exp: now.setMinutes(now.getMinutes() + life).valueOf()
    }
    
    const token = jwt.sign(payload, this.secret_key, {
      algorithm: "HS256"
    });

    return token;
  }

  /**
   * verifyToken
   */
  public verifyToken(token:string) {
    console.log('Verifying token...')
    let payload;
    try{
      payload = jwt.verify(token, this.secret_key)
    }
    catch(e){
      console.log('Invalid token...');
      return false;
    }

    const now = new Date();

    if (now.valueOf() > payload.exp) {
      console.log('Expired token...')
      return false;
    }
    
    return true;
  }

  /**
   * refreshToken
   */
  public refreshToken(oldTokenString:string) {
    const oldToken = jwt.verify(oldTokenString, this.secret_key);
    const now = new Date();

    const life:number = parseInt(process.env.TOKEN_LIFE_IN_MINUTES || '1');

    const payload = {
      account:oldToken.account,
      exp: now.setMinutes(now.getMinutes() + life).valueOf()
    }
    
    const token = jwt.sign(payload, this.secret_key, {
      algorithm: "HS256"
    });

    return token;
  }
}

