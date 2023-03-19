import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IsString } from 'class-validator'
import { Pais } from '@Entity/PaisEntity'

@Entity()
export class EstDepPro extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column({ nullable: false })
  @IsString()
    name: string

  @Column({ nullable: false })
  @IsString()
    code: string

  @ManyToOne(() => Pais, (pais: Pais) => pais.id)
    idPais: Pais
}
