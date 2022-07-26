/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();

function getOrmConfig() {
  const nodeEnv = process.env.NODE_ENV || 'prod';

  // conf for Oracle database
  if (process.env.DB_TYPE === 'oracle') {
    let ormConf = {
      type: process.env.DB_TYPE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      connectString: process.env.CONNECT_STRING,
      entities: [__dirname + '/dist/entity/**/*.entity.js'],
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration',
      },
      logging: false,
      synchronize: false,
    };

    if (nodeEnv === 'dev') {
      ormConf.entities[0] = __dirname + '/src/entity/**/*.entity.ts';
      //ormConf.logging = true;
      ormConf.synchronize = true;
    }

    return ormConf;
  }

  // conf for other database
  else {
    let ormConf = {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/dist/entity/**/*.entity.js'],
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration',
      },
      logging: false,
      synchronize: false,
    };

    if (nodeEnv === 'dev') {
      ormConf.entities[0] = __dirname + '/src/entity/**/*.entity.ts';
      // ormConf.logging = true;
      ormConf.synchronize = true;
    }

    return ormConf;
  }
}

module.exports = getOrmConfig();
