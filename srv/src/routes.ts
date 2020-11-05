import { Router } from "express";
import MainController from "./Controllers/MainController";
import AccountController from "./Controllers/AccountController";
import BankController from "./Controllers/BankController";


const routes = Router();

routes.get('/', MainController.index);

// Account 
routes.post('/account/registration', AccountController.registration);
routes.post('/account/login', AccountController.authentication);

// transaction

// bank
routes.get('/bank', BankController.read);
routes.post('/bank', BankController.create);
routes.put('/bank/:id', BankController.update);
routes.delete('/bank/:id', BankController.delete);

export default routes;