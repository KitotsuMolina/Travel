import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createCiudad,
  findAllCiudad,
  updateCiudad,
  deleteCiudad,
  findByIdCiudad
} from '@Controllers/CiudadEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createCiudad(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllCiudad(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateCiudad(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteCiudad(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdCiudad(req, res)
})

export default router
