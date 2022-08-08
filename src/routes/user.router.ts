/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Router, Request, Response, NextFunction } from 'express';
import { wrap } from '../middlewares/wrap.middle';
import { CrateRoleScopeValidation, UpdateRoleScopeValidation } from '@validators/role-scope.validator';
import { validates } from '@middlewares/express-validation.middle';
import UserService from 'service/user.service';
import Container from 'typedi';
import { RoleScope } from '@database/entity/user-management/mms_user_role_scope.entity';

const router: Router = express.Router();

/********************************* MMS_USER_ROLE_SCOPE ********************************************/

//get all RoleScope List
router.get(
  '/get-role-scope',
  [],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const userService: UserService = Container.get(UserService);

    const getRoleScope: RoleScope[] = await userService.get();

    return res.json({
      message: 'Operation Successfull.',
      res: getRoleScope,
    });
  }),
);

//create RoleScope
router.post(
  '/role-scope',
  [validates(CrateRoleScopeValidation)],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const userService: UserService = Container.get(UserService);

    const roleScope: RoleScope = await userService.create({
      ...req.body,
    });

    return res.json({
      message: 'Operation Successfull.',
      res: roleScope,
    });
  }),
);

//update RoleScope by Id
router.put(
  '/role-scope/:id',
  [validates(UpdateRoleScopeValidation)],
  wrap(async (req: Request<{ id: number }>, res: Response, next: NextFunction) => {
    const userService: UserService = Container.get(UserService);
    const roleScope: RoleScope | null = await userService.update(req.params.id, req.body);

    return res.json({
      message: 'Operation Successfull.',
      res: roleScope,
    });
  }),
);

//delete RoleScope by Id
router.delete(
  '/role-scope-delete/:id',
  [],
  wrap(async (req: Request<{ id: number }>, res: Response, next: NextFunction) => {
    const userService: UserService = Container.get(UserService);
    const roleScope: number = await userService.delete(req.params.id);

    return res.json({
      message: 'Operation Successfull.',
      res: {
        id: roleScope,
      },
    });
  }),
);

export default router;
