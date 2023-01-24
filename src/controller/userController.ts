import { UserInterface } from '@Interfaces/userInterface'
import * as UserServices from '@Services/userService'
import { Response, Request } from 'express'

export const getAllUsers = (_req: Request, res: Response): void => {
  try {
    UserServices.getAllUsers().then((users: UserInterface[]) => {
      res.status(200).json(users)
    }).catch((err) => {
      console.log(err)
      res.sendStatus(404)
    })
  } catch (err) {
    console.error(err)
    res.sendStatus(404)
  }
}

export const setUser = (req: Request, res: Response): void => {
  try {
    const user = UserServices.setUser(req.body)
    res.send(user)
  } catch (err: Error | any) {
    console.error(err)
    res.status(404).json(err.message)
  }
}

export const findById = (req: Request, res: Response): void => {
  try {
    const id = req.query.id === undefined ? 0 : req.query.id
    UserServices.findById(+id).then((users: UserInterface[]) => {
      res.status(200).json(users)
    }).catch((err) => {
      console.log(err)
      res.sendStatus(404)
    })
  } catch (err) {
    console.error(err)
    res.sendStatus(404)
  }
}
