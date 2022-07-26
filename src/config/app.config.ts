import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3535,
  env: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '',
  dbtype: process.env.DB_TYPE,
  dbport: process.env.DB_PORT,
};

export function getPort() {
  return Number(process.env.PORT) || 3535;
}

export function getDatabaseType() {
  return process.env.DB_TYPE || 'postgres';
}

export function getInitSettings() {
  const initApp = process.env.INIT_APP;
  const initUsername = process.env.INIT_USERNAME;
  const initPassword = process.env.INIT_PASSWORD;
  return {
    initApp: initApp,
    initUsername: initUsername,
    initPassword: initPassword,
  };
}

export function getUserIdCase() {
  return process.env.USER_ID_CASE || 'UPPER';
}
