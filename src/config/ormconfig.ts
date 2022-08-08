/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

// function getOrmConfig() {
//   const nodeEnv = process.env.NODE_ENV || 'prod';

//   // conf for Oracle database
//   if (process.env.DB_TYPE === 'oracle') {
//     let ormConf = {
//       type: process.env.DB_TYPE,
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       connectString: process.env.CONNECT_STRING,
//       entities: [__dirname + '/dist/entity/**/*.entity.js'],
//       migrations: ['migration/*.js'],
//       cli: {
//         migrationsDir: 'migration',
//       },
//       logging: false,
//       synchronize: false,
//     };

//     if (nodeEnv === 'dev') {
//       ormConf.entities[0] = __dirname + '/src/entity/**/*.entity.ts';
//       //ormConf.logging = true;
//       ormConf.synchronize = true;
//     }

//     return ormConf;
//   }

//   // conf for other database
//   else {
//     if (nodeEnv === 'dev') {
//       const AppDataSource = new DataSource({
//         type: 'postgres',
//         host: process.env.DB_HOST,
//         port: 5432,
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         entities: [__dirname + '/dist/entity/**/*.entity.ts'],
//         migrations: ['migration/*.js'],
//         logging: false,
//         synchronize: true,
//       });
//       return AppDataSource;
//     } else {
//       const AppDataSource = new DataSource({
//         type: 'postgres',
//         host: process.env.DB_HOST,
//         port: 5432,
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         entities: [__dirname + '/dist/entity/**/*.entity.js'],
//         migrations: ['migration/*.js'],
//         logging: false,
//         synchronize: false,
//       });
//       return AppDataSource;
//     }
//   }
// }

const nodeEnv = process.env.NODE_ENV || 'prod';
let Crossenv;
if (nodeEnv === 'dev') {
  Crossenv = {
    entities: [process.cwd() + '/src/database/entity/**/*.entity.ts'],
    synchronize: true,
  };
} else {
  Crossenv = {
    entities: [process.cwd() + '/dist/database/entity/**/*.entity.js'],
    synchronize: false,
  };
}
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: Crossenv.entities,
  migrations: ['migration/*.js'],
  logging: false,
  synchronize: Crossenv.synchronize,
});

export { AppDataSource as connectionPool };
