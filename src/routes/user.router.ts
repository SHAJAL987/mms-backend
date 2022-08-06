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
    const { role_scope_code, scope_name, is_visible, status, create_by } = req.body;

    const response = {
      role_scope_code: role_scope_code,
      scope_name: scope_name,
      is_visible: is_visible,
      status: status,
      create_by: create_by,
    };

    res.json({
      message: 'Operation SuccessFull',
      res: response,
    });
  }),
);

export default router;
