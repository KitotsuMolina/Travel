import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IsString } from 'class-validator'
import { Rol } from '@Entity/RolEntity'
import { Permisos } from '@Entity/PermisosEntity'

@Entity()
export class RolPermisos extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
    id: string

  @ManyToOne(() => Rol, (rol: Rol) => rol.id)
    idRol: Rol

  @ManyToOne(() => RolPermisos, (rolPermisos: RolPermisos) => rolPermisos.id)
    idPermisos: Permisos
}
