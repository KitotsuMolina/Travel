import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createLogin,
  findAllLogin,
  updateLogin,
  deleteLogin,
  findByIdLogin
} from '@Controllers/LoginEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createLogin(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllLogin(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateLogin(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteLogin(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdLogin(req, res)
})

export default router
