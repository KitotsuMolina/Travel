import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne, OneToOne, JoinColumn
} from 'typeorm'
import { IsBoolean, IsDate, IsEmail, IsString } from 'class-validator'
import { Rol } from '@Entity/RolEntity'
import { People } from '@Entity/PeopleEntity'

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column({ unique: true })
  @IsString()
    username: string

  @Column()
  @IsString()
    password: string

  @Column({ default: true })
  @IsBoolean()
    active: boolean

  @CreateDateColumn()
  @IsDate()
    createdAt: Date

  @UpdateDateColumn()
  @IsDate()
    updatedAt: Date

  @Column()
  @IsEmail()
    email: string

  @ManyToOne(() => Rol, (rol: Rol) => rol.id)
    idRol: Rol

  @OneToOne(() => People)
  @JoinColumn()
    idPeople: People
}
