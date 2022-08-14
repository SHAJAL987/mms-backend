import { Application } from 'express';
import utilsRouter from '@routes/utils.routes';
import userRouter from '@routes/user-management/user.router';

export default function configureRoutes(app: Application) {
  app.use('/mmsys/v1', utilsRouter);
  app.use('/user/v1', userRouter);
}
