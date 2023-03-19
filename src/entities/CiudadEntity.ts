import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IsString } from 'class-validator'
import { EstDepPro } from '@Entity/EstDepProEntity'

@Entity()
export class Ciudad extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column({ nullable: false })
  @IsString()
    code: string

  @Column({ nullable: false })
  @IsString()
    name: string

  @ManyToOne(() => EstDepPro, (estDepPro: EstDepPro) => estDepPro.id)
    idEDP: EstDepPro
}
