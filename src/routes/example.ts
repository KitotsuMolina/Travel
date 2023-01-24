import express from 'express'
import * as ExampleService from '@Controllers/ExampleController'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(ExampleService.getEntriesSensitive())
})

router.get('/:id', (req, res) => {
  const example = ExampleService.findById(+req.params.id)
  return example == null ? res.sendStatus(404) : res.send(example)
})
router.post('/', (req, res) => {
  const { date, content, important, validate, weather, visibility } = req.body
  const newExampleEntry = ExampleService.addExample({ date, content, important, validate, weather, visibility })
  res.json(newExampleEntry)
})

export default router
