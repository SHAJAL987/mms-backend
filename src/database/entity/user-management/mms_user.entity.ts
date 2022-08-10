import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('MMS_USER_MST')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: true,
    length: 20,
  })
  user_code!: string;

  @Column({
    nullable: true,
    length: 50,
  })
  user_name!: string;

  @Column()
  email!: string;

  @Column({
    length: 11,
  })
  mobile_no!: string;

  @Column()
  password!: string;

  @Column({
    nullable: true,
    length: 3,
  })
  user_type!: string;

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
}
