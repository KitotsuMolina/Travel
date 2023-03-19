import { Pool } from 'pg'
import { DataSource } from 'typeorm'
import { Users } from '@Entity/UserEntity'
import { Ciudad } from '@Entity/CiudadEntity'
import { Comentarios } from '@Entity/ComentariosEntity'
import { EstDepPro } from '@Entity/EstDepProEntity'
import { Login } from '@Entity/LoginEntity'
import { Pais } from '@Entity/PaisEntity'
import { People } from '@Entity/PeopleEntity'
import { Permisos } from '@Entity/PermisosEntity'
import { PuntosInteres } from '@Entity/PuntosInteresEntity'
import { Rol } from '@Entity/RolEntity'
import { RolPermisos } from '@Entity/RolPermisosEntity'

export const pool = new Pool({
  host: '0.0.0.0',
  user: 'admin',
  password: 'admin123',
  database: 'travel',
  port: 2432
})
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '0.0.0.0',
  port: 2432,
  username: 'admin',
  password: 'admin123',
  database: 'travel',
  synchronize: true,
  logging: true,
  entities: [Users, Ciudad, Comentarios, EstDepPro, Login, Pais, People, Permisos, PuntosInteres, Rol, RolPermisos],
  subscribers: [],
  migrations: []
})
