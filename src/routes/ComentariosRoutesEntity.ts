import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createComentarios,
  findAllComentarios,
  updateComentarios,
  deleteComentarios,
  findByIdComentarios
} from '@Controllers/ComentariosEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createComentarios(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllComentarios(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updateComentarios(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deleteComentarios(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdComentarios(req, res)
})

export default router
