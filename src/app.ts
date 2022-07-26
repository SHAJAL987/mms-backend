import express, { Request, Response } from 'express';
// import configureExpress from '@config/express.config';
// import configureRoutes from '@config/routes.config';
import errorHandler from '@middlewares/error-handler.middle';

const app: express.Application = express();
app.use(express.json({ limit: '50mb' }));

/**
 * Express configuration
 */
// configureExpress(app);

/**
 * Registering Modules
 */
// configureRoutes(app);

/**
 * Health of API
 */
app.use('*', (_: Request, res: Response) => {
  return res.status(404).json({ message: 'API not found' });
});

/**
 * Error Handling Middleware
 */
app.use(errorHandler);

export default app;
