/* eslint-disable no-console */
import 'reflect-metadata';
import app from 'app';
import * as http from 'http';
import appConfig from '@config/app.config';
import { connectionPool } from '@config/ormconfig';
import dotenv from 'dotenv';
dotenv.config();

connectionPool
  .initialize()
  .then(() => {
    const server: http.Server = http.createServer(app);
    server.listen(appConfig.port, () => {
      console.log('[INFO] Environment: ', appConfig.env);
      console.log(`[INFO] Server running at http://localhost:${appConfig.port}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
