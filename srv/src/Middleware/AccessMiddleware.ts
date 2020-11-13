import { Request, Response } from 'express';
import TokenService from '../Service/TokenService';
import currentAccount from '../Infrastructure/currentAccount';

const accessMiddleware = async (req: Request, resp: Response, next:Function) => {

    console.log('Request logged:', req.method, req.path);


    if (req.path === '/account/login' || req.path === '/account/registration') {
      next();
      return;
    }

    let header: string;
    if (req.headers.authorization !== undefined) {
      header = <string> req.headers.authorization;
    } else {
      resp.status(400).json({message:'Invalid token!'});
      return;
    }

    const token = header.substring(7, header.length);

    const tokenService = new TokenService();
    if (!tokenService.verifyToken(token)) {
      resp.status(401).json({message:'Invalid token!'});
      return;
    }

    const account = await tokenService.getUserAccount(token);
    currentAccount.setAccount(account);

    resp.setHeader('new-token', tokenService.refreshToken(token));

    next();
}

export default accessMiddleware