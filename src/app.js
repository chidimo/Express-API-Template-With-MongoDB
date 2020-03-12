import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';

import './models/connect';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors('*'));
app.use(compression());

app.use('', indexRouter);

export default app;
