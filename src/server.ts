/* eslint-disable no-console */
import 'reflect-metadata';
import app from 'app';
import * as http from 'http';
import appConfig from '@config/app.config';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

if (process.env.NODE_ENV == 'development') {
  const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'mmsys',
    entities: [__dirname + '/entity/**/*.entity.ts'],
    synchronize: true,
  });

  AppDataSource.initialize()
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
}
