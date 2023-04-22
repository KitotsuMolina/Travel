// ---- PuntosInteresment keyword 'PuntosInteres' or 'puntosInteres' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { PuntosInteres } from '@Entity/PuntosInteresEntity'
import { EstDepPro } from '@Entity/EstDepProEntity'
import { Ciudad } from '@Entity/CiudadEntity'

export const createPuntosInteres = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, historia, latitude, longitude, edp, ciudad, puntuacion } = req.body
    const puntosInteres = new PuntosInteres()
    // ------Add your code the create------ //
    puntosInteres.nombre = nombre
    puntosInteres.historia = historia
    puntosInteres.latitude = latitude
    puntosInteres.longitude = longitude
    const edpEntity = new EstDepPro()
    edpEntity.id = edp.id
    puntosInteres.idEDP = edpEntity
    const ciudadEntity = new Ciudad()
    ciudadEntity.id = ciudad.id
    puntosInteres.idCiudad = ciudadEntity
    puntosInteres.puntuacion = puntuacion
    // ------Ende your code the create------ //
    await puntosInteres.save()
    res.status(200).json(puntosInteres)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllPuntosInteres = async (_req: Request, res: Response): Promise<void> => {
  try {
    const puntosInteres = await PuntosInteres.find()
    res.status(200).json(puntosInteres)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updatePuntosInteres = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const puntosInteres = await PuntosInteres.findOneBy({ id: req.query.id as string })
    if (puntosInteres == null) res.status(404).json({ message: ' PuntosInteres not found' })
    const puntosInteresUpdate = PuntosInteres.update({ id: req.query.id as string }, req.body)
    res.status(200).json(puntosInteresUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deletePuntosInteres = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await PuntosInteres.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'PuntosInteres not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdPuntosInteres = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const puntosInteres = await PuntosInteres.findOneBy({ id: req.query.id as string })
    if (puntosInteres == null) res.status(404).json({ message: 'PuntosInteres nor found' })
    res.status(200).json(puntosInteres)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
