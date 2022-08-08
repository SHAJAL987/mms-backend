import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class MMS_FEATURE {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    nullable: true,
    length: 255,
  })
  feature_name!: string;

  @Column({
    nullable: true,
  })
  parent_id!: number;

  @Column({
    nullable: true,
  })
  isParent!: boolean;

  @Column({
    nullable: false,
  })
  feature_level!: number;

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
}
