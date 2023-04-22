import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createPuntosInteres,
  findAllPuntosInteres,
  updatePuntosInteres,
  deletePuntosInteres,
  findByIdPuntosInteres
} from '@Controllers/PuntosInteresEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createPuntosInteres(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllPuntosInteres(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updatePuntosInteres(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deletePuntosInteres(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdPuntosInteres(req, res)
})

export default router
