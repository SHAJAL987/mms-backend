/* eslint-disable no-param-reassign*/
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('MMS_APP')
export class AppSettings {
  //Primarykey
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 5,
    nullable: true,
  })
  app_id!: string;

  @Column({
    length: 100,
    nullable: true,
  })
  app_name!: string;

  @Column({
    nullable: true,
  })
  app_url!: string;

  //application status field can be A='Active', I = 'Inactive'
  @Column({
    type: 'char',
    default: 'A',
  })
  status!: string;

  // create date
  @CreateDateColumn()
  createDate!: Date;

  // update date
  @UpdateDateColumn({
    nullable: true,
  })
  updateDate!: Date;
}
