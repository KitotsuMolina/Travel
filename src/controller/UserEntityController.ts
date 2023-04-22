
import { Response, Request } from 'express'
import { Users } from '@Entity/UserEntity'
import bcrypt from 'bcrypt'
import { Rol } from '@Entity/RolEntity'
import { People } from '@Entity/PeopleEntity'
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, username, password, rol, people } = req.body
    const user = new Users()
    user.email = email
    user.username = username
    void bcrypt.genSalt(12).then((salt) => {
      void bcrypt.hash(password, salt).then((hash) => {
        user.password = hash
      })
    })
    const rolEntity = new Rol()
    rolEntity.id = rol.id
    user.idRol = rolEntity

    const peopleEntity = new People()
    peopleEntity.id = people.id
    user.idPeople = peopleEntity
    await user.save()
    res.status(200).json(user)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllUser = async (_req: Request, res: Response): Promise<void> => {
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
    if (req.query.id == null) throw new Error('Not null id')
    const user = await Users.findOneBy({ id: req.query.id as string })
    if (user == null) res.status(404).json({ message: 'User not found' })
    const userUpdate = Users.update({ id: req.query.id as string }, req.body)
    res.status(200).json(userUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
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

export const findByIdUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const user = await Users.findOneBy({ id: req.query.id as string })
    if (user == null) res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
