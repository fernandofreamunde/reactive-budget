import express from 'express';
import routes from './routes';
import cors from 'cors';
import 'express-async-errors';
import './Service/DatabaseConnection';

const app = express();
app.use(express.json());
app.use(cors(/* {origin ... }*/));
app.use(routes);

app.listen(3333);