import express from 'express';
import routes from './routes';
import cors from 'cors';
import 'express-async-errors';
import './Infrastructure/DatabaseConnection';
import accessMiddleware from './Middleware/AccessMiddleware';

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  exposedHeaders: 'new-token' 
}
const app = express();
//chekc cors documentation https://github.com/expressjs/cors
app.use(cors(corsOptions));
app.use(accessMiddleware);
app.use(express.json());
app.use(routes);

app.listen(3333);