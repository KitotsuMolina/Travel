import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// import ExampleRouter from '@Routes/example'
// import UserRouter from '@Routes/user'
import UserRoutesEntity from '@Routes/userRoutesEntity'

const app = express()

// Middleware
app.use(express.json()) // middleware que transforma el req.body  aun json
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

// app.use('/api/examples', ExampleRouter)
// app.use('/api/users', UserRouter)
app.use('/api/entity/user', UserRoutesEntity)

export default app
