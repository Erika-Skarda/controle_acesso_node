import express from 'express';
import { permissionRouter, sessionRouter, userRouter } from './routes/routes';
import 'reflect-metadata';
import dotenv from "dotenv";
import "./database";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/session', sessionRouter);
app.use('/permission', permissionRouter)

app.listen(3333, () => {
  console.log('Running on port 3333')
});
