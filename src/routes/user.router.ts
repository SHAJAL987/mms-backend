/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Router, Request, Response, NextFunction } from 'express';
import { wrap } from '../middlewares/wrap.middle';
import { CrateRoleScopeValidation, UpdateRoleScopeValidation } from '@validators/user-management/role-scope.validator';
import { validates } from '@middlewares/express-validation.middle';
import RoleScopeService from 'service/user-management/role-scope.service';
import Container from 'typedi';
import { RoleScope } from '@database/entity/user-management/mms_user_role_scope.entity';
import { userCerationValidation } from '@validators/user-management/user-creation.validator';
import { User } from '@database/entity/user-management/mms_user.entity';
import UserCreationService, { getUserWithPasswordAndRole } from 'service/user-management/user-creation.service';
// import { token } from '@utils/generateToken.utils';

const router: Router = express.Router();

/********************************* MMS_USER_ROLE_SCOPE ********************************************/

//get all RoleScope List
router.get(
  '/get-role-scope',
  [],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const userService: RoleScopeService = Container.get(RoleScopeService);

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
    const userService: RoleScopeService = Container.get(RoleScopeService);

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
    const userService: RoleScopeService = Container.get(RoleScopeService);
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
    const userService: RoleScopeService = Container.get(RoleScopeService);
    const roleScope: number = await userService.delete(req.params.id);

    return res.json({
      message: 'Operation Successfull.',
      res: {
        id: roleScope,
      },
    });
  }),
);

/********************************* MMS_USER_MST ********************************************/
//Get User
router.get(
  '/user-list',
  [],
  wrap(async (req: Request, res: Response) => {
    const userService: UserCreationService = Container.get(UserCreationService);
    const getUser: User[] = await userService.get();

    res.json({
      message: 'Operation Successfull.',
      res: getUser,
    });
  }),
);

//Create User
router.post(
  '/add-user',
  [validates(userCerationValidation)],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    const userService: UserCreationService = Container.get(UserCreationService);

    const user: User = await userService.create({
      ...req.body,
    });

    const response = {
      userId: user.user_code,
      userName: user.user_name,
      userType: user.user_type,
    };

    return res.json({
      message: 'Operation Successfull.',
      res: response,
    });
  }),
);

//user login
router.post(
  '/login-user',
  [],
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    console.log('Shajal ------->');

    const user: any = await getUserWithPasswordAndRole(req.body.user_code);

    console.log('Shajal ------->', user);

    // const genTokenObj = {
    //   title: 'shajal',
    //   degin: 'Assn.',
    // };

    //const tokenGen = token(genTokenObj)

    return res.json({
      message: 'Operation Successfull.',
      res: user,
    });
  }),
);

export default router;
