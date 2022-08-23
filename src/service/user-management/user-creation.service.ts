/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectionPool } from '@config/ormconfig';
import { User } from '@database/entity/user-management/mms_user.entity';
import BaseService from '@global/base.interface';
import { ICreateUser } from '../../types/user-management/user-creation.interface';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { hassPass } from '@utils/encryptedPass.utils';

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
    const newUser: User = new User();

    newUser.user_code = data.user_code;
    newUser.user_name = data.user_name;
    newUser.email = data.email;
    newUser.mobile_no = data.mobile_no;
    newUser.password = hassPass(data.password);
    newUser.user_type = data.user_type;
    newUser.status = data.status;
    newUser.create_by = data.create_by;

    const user: User = await connectionPool.getRepository(User).save(newUser);
    return user;
  }
}
export async function getUserWithPasswordAndRole(userCode: string): Promise<Object> {
  // const userCodeWhereQuery = 'user.user_code = :userCode';

  const result: any = await connectionPool
    .createQueryBuilder(User, 'user')
    .addSelect('user.password')
    .where('user.user_code = 002145', { user_code: '002145' })
    .getOne();
  // const resultOne: any = await connectionPool
  //   .createQueryBuilder(User, 'MMS_USER_MST')
  //   .where('MMS_USER_MST.user_code = :userCode', { user_code: userCode })
  //   .getOne();

  // console.log(resultOne);

  return result;
}
