import express from 'express';
import { 
  permissionRouter, 
  productRouter, 
  roleRouter, 
  sessionRouter, 
  userRouter
 } from './routes/routes';
import 'reflect-metadata';
import dotenv from "dotenv";
import "./database";

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/session', sessionRouter);
app.use('/permission', permissionRouter);
app.use('/role', roleRouter);
app.use('/product', productRouter);

app.listen(3333, () => {
  console.log('Running on port 3333')
});
