import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AppSettings } from './mms_app.entity';

@Entity('MMS_FEATURE')
export class Feature {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    nullable: true,
    length: 255,
  })
  feature_desc!: string;

  @Column({
    nullable: true,
  })
  feature_serial!: number;

  @Column({
    nullable: true,
  })
  feature_level!: number;

  @Column({
    nullable: true,
  })
  feature_leaf!: string;

  @Column()
  partent_id!: number;

  @Column({
    type: 'char',
    length: 1,
  })
  app_flag!: string;

  @Column()
  route!: string;

  // role status field can be (A=approved, I=Inactive, R=rejected, D=deleted)
  @Column({
    type: 'char',
    default: 'A',
  })
  status!: string;

  // created by whom
  @Column({ length: 255 })
  createdBy!: string;

  // create date
  @CreateDateColumn()
  createDate!: Date;

  // updated by whom
  @Column({
    nullable: true,
    length: 255,
  })
  updatedBy!: string;

  // update date
  @UpdateDateColumn({
    nullable: true,
  })
  updateDate!: Date;

  @ManyToOne(() => AppSettings, (app) => app.features)
  @JoinColumn({
    name: 'app_code',
  })
  app!: AppSettings;
}
