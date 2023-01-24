import { Pool } from 'pg'
import { DataSource } from 'typeorm'
import { Users } from '@Entity/UserEntity'

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
  entities: [Users],
  subscribers: [],
  migrations: []
})
