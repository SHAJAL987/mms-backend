/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Router, Request, Response, NextFunction } from 'express';
import { wrap } from '../middlewares/wrap.middle';
import { roleScopeValidation } from '@validators/role-scope.validator';
import { validates } from '@middlewares/express-validation.middle';
import UserService from 'service/user.service';
import Container from 'typedi';
import { RoleScope } from '@database/entity/user-management/mms_user_role_scope.entity';

const router: Router = express.Router();

/********************************* MMS_USER_ROLE_SCOPE ********************************************/
router.post(
  '/role-scope',
  [validates(roleScopeValidation)],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const userService: UserService = Container.get(UserService);

    const roleScope: RoleScope = await userService.create({
      ...req.body,
    });

    res.json({
      message: 'Operation Successfull.',
      res: roleScope,
    });
  }),
);

router.get(
  '/get-role-scope',
  [],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const userService: UserService = Container.get(UserService);

    const getRoleScope: RoleScope[] = await userService.get();

    res.json({
      message: 'Operation Successfull.',
      res: getRoleScope,
    });
  }),
);
export default router;
