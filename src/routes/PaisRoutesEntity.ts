import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createPais,
  findAllPais,
  updatePais,
  deletePais,
  findByIdPais
} from '@Controllers/PaisEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createPais(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllPais(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updatePais(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deletePais(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdPais(req, res)
})

export default router
