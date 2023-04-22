import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createEstDepPro,
  findAllEstDepPro,
  updateEstDepPro,
  deleteEstDepPro,
  findByIdEstDepPro
} from '@Controllers/EstDepProEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createEstDepPro(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllEstDepPro(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateEstDepPro(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteEstDepPro(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdEstDepPro(req, res)
})

export default router
