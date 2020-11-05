import {Request, Response } from 'express';
import AccountService from '../Service/AccountService';
import TokenService from '../Service/TokenService';

export default {
  async registration(request: Request, response: Response) {

    const { email, password } = request.body;

    const account = new AccountService();

    return response.status(201).json(account.createAccount(email, password));
  },

  async authentication(request: Request, response: Response) {

    const { email, password } = request.body;

    const accountService = new AccountService();

    accountService.authenticate(email, password)
    .then(account => {
      if (account === null) {
        return response.status(400).json({'message': 'Bad credentials.'});
      }

      const tokenService = new TokenService();
  
      const token = tokenService.createToken(account);

      return response.status(200).json({token});
    })
    .catch((error) => {
      return response.status(400).json({'message': 'Bad credentials.'});
    });   
  }
}
