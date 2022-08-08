/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RoleScope } from '@database/entity/user-management/mms_user_role_scope.entity';
import BaseService from '@global/base.interface';
import { IRoleScope } from '../types/user.interface';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { connectionPool } from '@config/ormconfig';

@Service()
export default class UserService implements BaseService {
  constructor() {}

  /********************************* MMS_USER_ROLE_SCOPE ********************************************/
  //get all RoleScope List
  async get(tem?: EntityManager): Promise<RoleScope[]> {
    return await connectionPool.getRepository(RoleScope).find({
      order: { create_date: 'DESC' },
    });
  }

  //create RoleScope
  async create(data: IRoleScope, tem?: EntityManager): Promise<RoleScope> {
    let newRoleScope = await connectionPool.getRepository(RoleScope).create({
      ...data,
    });

    newRoleScope = await connectionPool.getRepository(RoleScope).save(newRoleScope);
    return newRoleScope;
  }
}
