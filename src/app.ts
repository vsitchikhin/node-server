import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import getUserRouter from './routes/users';
import getAccountsRouter from './routes/accounts';
import getAuthRouter from './routes/auth';
import { db } from './database/db';

dotenv.config();

export const salt = process.env.SALT || ''

const expressJSONBody = express.json()
export const app: Express = express();


app.use(expressJSONBody)
app.use('/users', getUserRouter(db))
app.use('/auth', getAuthRouter(db))
app.use('/accounts', getAccountsRouter(db))