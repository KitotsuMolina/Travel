import express from 'express'
// import { body, validationResult } from 'express-validator'

import {createUser, findAllUsers, updateUser, deleteUser, findByid} from '@Controllers/UserEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createUser(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllUsers(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateUser(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteUser(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByid(req, res)
})

export default router
