import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// import ExampleRouter from '@Routes/example'
// import UserRouter from '@Routes/user'
import UserRoutesEntity from '@Routes/UserRoutesEntity'
import CiudadRoutesEntity from '@Routes/CiudadRoutesEntity'
import ComentariosRoutesEntity from '@Routes/ComentariosRoutesEntity'
import EstDepProRoutesEntity from '@Routes/EstDepProRoutesEntity'
import LoginRoutesEntity from '@Routes/LoginRoutesEntity'
import PaisRoutesEntity from '@Routes/PaisRoutesEntity'
import PeopleRoutesEntity from '@Routes/PeopleRoutesEntity'
import PermisosRoutesEntity from '@Routes/PermisosRoutesEntity'
import PuntosInteresRoutesEntity from '@Routes/PuntosInteresRoutesEntity'
import RolPermisosRoutesEntity from '@Routes/RolPermisosRoutesEntity'
import RolRoutesEntity from '@Routes/RolRoutesEntity'

const app = express()

// Middleware
app.use(express.json()) // middleware que transforma el req.body  aun json
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

// app.use('/api/examples', ExampleRouter)
// app.use('/api/users', UserRouter)
app.use('/api/entity/user', UserRoutesEntity)
app.use('/api/entity/ciudad', CiudadRoutesEntity)
app.use('/api/entity/comentarios', ComentariosRoutesEntity)
app.use('/api/entity/edp', EstDepProRoutesEntity)
app.use('/api/entity/login', LoginRoutesEntity)
app.use('/api/entity/pais', PaisRoutesEntity)
app.use('/api/entity/people', PeopleRoutesEntity)
app.use('/api/entity/permisos', PermisosRoutesEntity)
app.use('/api/entity/puntos_interes', PuntosInteresRoutesEntity)
app.use('/api/entity/rol_permisos', RolPermisosRoutesEntity)
app.use('/api/entity/rol', RolRoutesEntity)

export default app
