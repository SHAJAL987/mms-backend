import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './mms_user.entity';
import { RoleScope } from './mms_user_role_scope.entity';

@Entity('MMS_GROUP_MST')
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: true,
    length: 100,
  })
  group_name!: string;

  // visibility status Y='Yes',N='No'
  @Column({
    length: 3,
    default: 'Y',
  })
  is_visible!: string;

  //application status field can be A='Active', I = 'Inactive'
  @Column({
    type: 'char',
    default: 'A',
  })
  status!: string;

  @Column({
    nullable: true,
    length: 50,
  })
  create_by!: string;

  // create date
  @CreateDateColumn()
  create_date!: Date;

  @Column({
    length: 50,
  })
  update_by!: string;

  // update date
  @UpdateDateColumn({
    nullable: true,
  })
  update_date!: Date;

  @Column({
    length: 50,
  })
  approve_by!: string;

  @Column({
    type: Date,
  })
  approve_date!: Date;

  @ManyToOne(() => RoleScope, (roleScope) => roleScope.group)
  @JoinColumn({
    name: 'role_scope_id',
  })
  roleScope!: RoleScope[];

  @ManyToMany(() => User, (user) => user.groups)
  user!: User;
}
