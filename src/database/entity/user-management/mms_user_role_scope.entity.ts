import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Group } from './mms_group.entity';

@Entity('MMS_USER_ROLE_SCOPE')
export class RoleScope {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
    length: 3,
  })
  role_scope_code!: string;

  @Column({
    nullable: false,
    length: 50,
  })
  scope_name!: string;

  @Column({
    nullable: false,
    length: 1,
    default: 'Y',
  })
  is_visible!: string;

  @Column({
    nullable: false,
    length: 1,
    default: 'I',
  })
  status!: string;

  @Column({
    length: 255,
  })
  create_by!: string;

  @CreateDateColumn()
  create_date!: Date;

  @Column({
    length: 255,
    nullable: true,
  })
  update_by!: string;

  @UpdateDateColumn()
  update_date!: Date;

  @OneToMany(() => Group, (group) => group.id)
  group!: Group;
}
