import { Router } from 'express';
import  userRouter from './user.route';

const v1Router = Router();

v1Router.use('/users', userRouter);

export default v1Router ;
