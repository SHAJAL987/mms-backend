import { Application } from 'express';
import utilsRouter from '@routes/utils.routes';
import userRouter from '@routes/user.router';

export default function configureRoutes(app: Application) {
  app.use('/mmsys/v1', utilsRouter);
  app.use('/mmsys/v1', userRouter);
}
