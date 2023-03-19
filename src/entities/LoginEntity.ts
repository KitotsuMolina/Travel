import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IsDate, IsJWT, IsString } from 'class-validator'
import { Users } from '@Entity/UserEntity'

@Entity()
export class Login extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column()
  @IsJWT()
    token: string

  @CreateDateColumn()
  @IsDate()
    createdAt: Date

  @Column()
  @IsDate()
    finishedAt: Date

  @ManyToOne(() => Users, (users: Users) => users.id)
    idUser: Users
}
