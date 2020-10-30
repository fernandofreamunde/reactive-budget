import {Request, Response } from 'express';
import AccountService from '../Service/AccountService';

export default {
  async registration(request: Request, response: Response) {

    const { email, password } = request.body;

    const account = new AccountService();

    return response.status(201).json(account.createAccount(email, password));
  }
}