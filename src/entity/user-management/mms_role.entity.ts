import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class MMS_ROLE {
  // primary key
  @PrimaryGeneratedColumn()
  id!: number;

  // role unique name
  @Column({
    unique: true,
    length: 255,
  })
  rolename!: string;

  // description of role
  @Column({ length: 1024 })
  description!: string;

  // role status field can be (A=approved, I=Inactive, R=rejected, D=deleted)
  @Column({
    type: 'char',
    default: 'I',
  })
  status!: string;

  @Column({
    nullable: true,
    length: 255,
  })
  approvedBy!: string;

  // approval date
  @Column({
    nullable: true,
  })
  approveDate!: Date;

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
