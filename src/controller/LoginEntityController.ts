// ---- Loginment keyword 'Login' or 'login' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { Login } from '@Entity/LoginEntity'
import { Users } from '@Entity/UserEntity'

export const createLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token, user } = req.body
    const login = new Login()
    // ------Add your code the create------ //
    login.token = token
    const userEntity = new Users()
    userEntity.id = user.id
    login.idUser = userEntity
    // ------Ende your code the create------ //
    await login.save()
    res.status(200).json(login)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllLogin = async (_req: Request, res: Response): Promise<void> => {
  try {
    const login = await Login.find()
    res.status(200).json(login)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const login = await Login.findOneBy({ id: req.query.id as string })
    if (login == null) res.status(404).json({ message: ' Login not found' })
    const loginUpdate = Login.update({ id: req.query.id as string }, req.body)
    res.status(200).json(loginUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await Login.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'Login not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const login = await Login.findOneBy({ id: req.query.id as string })
    if (login == null) res.status(404).json({ message: 'Login nor found' })
    res.status(200).json(login)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
