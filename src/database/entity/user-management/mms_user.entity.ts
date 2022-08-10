import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
