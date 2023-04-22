import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createRolPermisos,
  findAllRolPermisos,
  updateRolPermisos,
  deleteRolPermisos,
  findByIdRolPermisos
} from '@Controllers/RolPermisosEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createRolPermisos(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllRolPermisos(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateRolPermisos(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteRolPermisos(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdRolPermisos(req, res)
})

export default router
