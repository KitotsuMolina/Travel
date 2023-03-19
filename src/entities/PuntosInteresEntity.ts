import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IsDecimal, IsLatitude, IsLongitude, IsString } from 'class-validator'
import { EstDepPro } from '@Entity/EstDepProEntity'
import { Ciudad } from '@Entity/CiudadEntity'

export class PuntosInteres extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @Column({ nullable: false })
  @IsString()
    nombre: string

  @Column()
  @IsString()
    historia: string

  @Column()
  @IsLatitude()
    latitude: number

  @Column()
  @IsLongitude()
    longitude: number

  @ManyToOne(() => EstDepPro, (estDepPro: EstDepPro) => estDepPro.id, { nullable: false })
    idEDP: EstDepPro

  @ManyToOne(() => Ciudad, (ciudad: Ciudad) => ciudad.id, { nullable: true })
    idCiudad: Ciudad

  @Column()
  @IsDecimal()
    puntuacion: number
}
