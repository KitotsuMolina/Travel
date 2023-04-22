import express from 'express'
// import { body, validationResult } from 'express-validator'

import {
  createPeople,
  findAllPeople,
  updatePeople,
  deletePeople,
  findByIdPeople
} from '@Controllers/PeopleEntityController'

const router = express.Router()

router.post('', [], (req: express.Request, res: express.Response) => {
  void createPeople(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findAllPeople(req, res)
})

router.put('', [], (req: express.Request, res: express.Response) => {
  void updatePeople(req, res)
})

router.delete('', [], (req: express.Request, res: express.Response) => {
  void deletePeople(req, res)
})

router.get('', [], (req: express.Request, res: express.Response) => {
  void findByIdPeople(req, res)
})

export default router
