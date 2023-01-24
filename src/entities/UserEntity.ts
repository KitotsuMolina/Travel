import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import { IsBoolean, IsDate, IsEmail, IsInt, IsString } from 'class-validator'

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsInt()
    id: number

  @Column()
  @IsString()
    firstname: string

  @Column()
  @IsString()
    lastname: string

  @Column()
  @IsEmail()
    email: string

  @Column({ default: true })
  @IsBoolean()
    active: boolean

  @Column({ unique: true })
  @IsString()
    username: string

  @CreateDateColumn()
  @IsDate()
    createdAt: Date

  @UpdateDateColumn()
  @IsDate()
    updatedAt: Date

  @Column()
  @IsString()
    password: string
}
