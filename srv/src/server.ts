import express from 'express';
import routes from './routes';
import cors from 'cors';
import 'express-async-errors';
import './Infrastructure/DatabaseConnection';
import accessMiddleware from './Middleware/AccessMiddleware';

const app = express();
app.use(accessMiddleware);
app.use(express.json());
app.use(cors(/* {origin ... }*/));
app.use(routes);

app.listen(3333);