import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { IsDate, IsEmail, IsString } from 'class-validator'
import { Ciudad } from '@Entity/CiudadEntity'

@Entity()
export class People extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column()
  @IsString()
    firstname: string

  @Column()
  @IsString()
    lastname: string

  @Column()
  @IsEmail()
    email: string

  @Column()
  @IsString()
    documento: string

  @CreateDateColumn()
  @IsDate()
    createdAt: Date

  @UpdateDateColumn()
  @IsDate()
    updatedAt: Date

  @ManyToOne(() => Ciudad, (ciudad: Ciudad) => ciudad.id)
    idCiudad: Ciudad
}
