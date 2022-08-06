import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class MMS_USER_ROLE_SCOPE {
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
}
