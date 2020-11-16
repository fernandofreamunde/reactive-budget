import {Request, Response } from 'express';
import sendmail from '../Infrastructure/mailer';

export default {
  async index(request: Request, response: Response) {
   // sendmail();
    return response.status(200).json({"cenas": "claras"});
  }
}