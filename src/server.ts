import 'reflect-metadata';
import app from 'app';
import * as http from 'http';
import appConfig from '@config/app.config';

(async function () {
  const server: http.Server = http.createServer(app);

  server.listen(appConfig.port, () => {
    // eslint-disable-next-line no-console
    console.log('[INFO] Environment: ', appConfig.env);
    // eslint-disable-next-line no-console
    console.log(`[INFO] Server running at http://localhost:${appConfig.port}`);
  });
})();
