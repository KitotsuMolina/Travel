import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsString } from 'class-validator'

@Entity()
export class Rol extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column({ nullable: false })
  @IsString()
    name: string
}
