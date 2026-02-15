import cors from 'cors';
import express from 'express';
import hemlet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(hemlet());
app.use(morgan('dev'));
app.use(express.json());

export default app;
