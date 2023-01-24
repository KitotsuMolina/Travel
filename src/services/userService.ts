import { UserInterface, UserInterfaceAdd } from '@Interfaces/userInterface'
import { pool } from '@DB/connection'
import { QueryResult } from 'pg'
export const getAllUsers = async (): Promise<UserInterface[]> => {
  const usersList: QueryResult<UserInterface> = await pool.query('SELECT * FROM public.users')
  return usersList.rows
}

export const findById = async (id: number): Promise<UserInterface[]> => {
  const user: QueryResult<UserInterface> = await pool.query(`SELECt * FROM public.users WHERE id = ${id}`)
  return user.rows
}

export const setUser = async (user: UserInterfaceAdd): Promise<UserInterface[]> => {
  const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.name, user.email])
  return response.rows
}
