import express from 'express'
import * as UserController from '@Controllers/userController'
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.get('/', UserController.getAllUsers)
router.get('/findById', UserController.findById)
router.post('/', [body('name').isString().isLength({ min: 5, max: 124 }),
  body('email').isEmail()], (req: express.Request, res: express.Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.json(errors.array())
  } else {
    UserController.setUser(req, res)
  }
})
export default router
