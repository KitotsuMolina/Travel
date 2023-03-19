import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IsDecimal, IsString } from 'class-validator'
import { People } from '@Entity/PeopleEntity'
import { PuntosInteres } from '@Entity/PuntosInteresEntity'

export class Comentarios extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column()
  @IsString()
    comentarios: string

  @ManyToOne(() => People, (people: People) => people.id, { nullable: false })
    idPeople: People

  @ManyToOne(() => PuntosInteres, (puntosInteres: PuntosInteres) => puntosInteres.id, { nullable: false })
    idPuntosInteres: PuntosInteres

  @Column()
  @IsDecimal()
    puntuacion: number
}
