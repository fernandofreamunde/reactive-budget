import {Request, Response } from 'express';
import AccountService from '../Service/AccountService';

export default {
  async registration(request: Request, response: Response) {

    const { email, password } = request.body;

    const account = new AccountService();

    return response.status(201).json(account.createAccount(email, password));
  },

  async authentication(request: Request, response: Response) {

    const { email, password } = request.body;

    const accountService = new AccountService();

    const account = await accountService.authenticate(email, password);

    return response.status(200).json(account);
  }
}