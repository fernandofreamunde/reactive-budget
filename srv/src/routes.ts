import { Router } from "express";
import MainController from "./Controllers/MainController";
import UserController from "./Controllers/AccountController";


const routes = Router();

routes.get('/', MainController.index);
routes.post('/registration', UserController.registration);

export default routes;