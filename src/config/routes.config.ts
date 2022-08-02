import { Application } from 'express';
import utilsRouter from '@routes/utils.routes';

export default function configureRoutes(app: Application) {
  app.use('/mmsys/v1', utilsRouter);
}
