import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import getUserRouter from './routes/users';
import getAccountsRouter from './routes/accounts';
import getAuthRouter from './routes/auth';
import { connection } from "./database/config";
import { createAccountsTableQuery } from "./models/AccountsModel";
import { createUsersTableQuery } from "./models/UserModel";
import { db } from './database/db';

dotenv.config();

export const app: Express = express();

connection.connect((err) => {
  if (err) {
    return console.error(`Возникла ошибка ${err}`)
  }
  console.log('Подключение успешно установлено!')
});
async function createTables() {
  const usersErr = await connection.query(createUsersTableQuery);
  const accountsErr = await connection.query(createAccountsTableQuery);
  if (usersErr || accountsErr) {
    return console.error(`Что-то пошло не так ${usersErr}, ${accountsErr}`);
  }
}
createTables().then();
connection.end();


app.use('/users', getUserRouter(db))
app.use('/auth', getAuthRouter(db))
app.use('/accounts', getAccountsRouter(db))