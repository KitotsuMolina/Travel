import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createRol,
  findAllRol,
  updateRol,
  deleteRol,
  findByIdRol
} from '@Controllers/RolEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createRol(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllRol(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateRol(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteRol(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdRol(req, res)
})

export default router
