/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Router, Request, Response, NextFunction } from 'express';
import { wrap } from '../middlewares/wrap.middle';
import { roleScopeValidation } from '@validators/role-scope.validator';
import { validates } from '@middlewares/express-validation.middle';

const router: Router = express.Router();

router.post(
  '/role-scope',
  [validates(roleScopeValidation)],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const { roleScopeCode, scodeName, isVisible, status, createBy } = req.body;

    const response = {
      roleScopeCode: roleScopeCode,
      scopeName: scodeName,
      isVisible: isVisible,
      status: status,
      createBy: createBy,
    };

    res.json({
      message: 'Operation SuccessFull',
      res: response,
    });
  }),
);

export default router;
