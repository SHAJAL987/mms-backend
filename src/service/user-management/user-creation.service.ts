/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectionPool } from '@config/ormconfig';
import { User } from '@database/entity/user-management/mms_user.entity';
import BaseService from '@global/base.interface';
import { ICreateUser } from '../../types/user-management/user-creation.interface';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';

@Service()
export default class UserCreationService implements BaseService {
  constructor() {}

  //get all User List
  async get(tem?: EntityManager): Promise<User[]> {
    return await connectionPool.getRepository(User).find({
      order: { create_date: 'DESC' },
    });
  }

  //create User
  async create(data: ICreateUser, tem?: EntityManager): Promise<User> {
    let newUser = await connectionPool.getRepository(User).create({
      ...data,
    });

    newUser = await connectionPool.getRepository(User).save(newUser);
    return newUser;
  }
}
