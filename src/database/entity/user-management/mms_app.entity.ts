/* eslint-disable no-param-reassign*/
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('MMS_APPLICATION_INFO')
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
    length: 3,
    nullable: true,
  })
  app_code!: string;

  @Column({
    length: 100,
    nullable: true,
  })
  app_name!: string;

  @Column({
    nullable: true,
  })
  app_url!: string;

  // visibility status Y='Yes',N='No'
  @Column({
    length: 1,
    default: 'Y',
  })
  is_visible!: string;

  @Column({
    nullable: true,
  })
  app_visible_serial!: number;

  @Column({
    nullable: true,
  })
  app_icon!: string;

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
}
