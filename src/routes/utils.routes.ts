/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Router, Request, Response, NextFunction } from 'express';
import { wrap } from '../middlewares/wrap.middle';
import { getInitAppUrl } from '@config/app.config';

const router: Router = express.Router();

router.post(
  '/init-app',
  [],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const initAppUrl = getInitAppUrl();

    res.json({
      message: initAppUrl.initMealSysapp,
    });
  }),
);

export default router;
