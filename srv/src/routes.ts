import { Router } from "express";
import MainController from "./Controllers/MainController";
import AccountController from "./Controllers/AccountController";


const routes = Router();

routes.get('/', MainController.index);
routes.post('/registration', AccountController.registration);
routes.post('/login', AccountController.authentication);

export default routes;