import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createPermisos,
  findAllPermisos,
  updatePermisos,
  deletePermisos,
  findByIdPermisos
} from '@Controllers/PermisosEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createPermisos(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllPermisos(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updatePermisos(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deletePermisos(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdPermisos(req, res)
})

export default router
