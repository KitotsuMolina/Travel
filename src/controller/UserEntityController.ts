
import { Response, Request } from 'express'
import { Users } from '@Entity/UserEntity'

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, username } = req.body
    const user = new Users()
    user.firstname = firstName
    user.lastname = lastName
    user.email = email
    user.username = username

    await user.save()
    res.status(200).json(user)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await Users.find()
    res.status(200).json(users)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('not null id')
    const user = await Users.findOneBy({ id: parseInt(req.query.id as string) })
    if (user == null) res.status(404).json({ message: 'User not found' })
    const userUpdate = Users.update({ id: parseInt(req.query.id as string) }, req.body)
    res.status(200).json(userUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('not null id')
    const result = await Users.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'User not found' })
    } else {
      res.status(204).json({ message: 'Delete Success' })
    }
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}

export const findByid = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('not null id')
    const user = await Users.findOneBy({ id: parseInt(req.query.id as string) })
    if (user == null) res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
