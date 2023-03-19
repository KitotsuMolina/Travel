import { Ciudad } from '@Entity/CiudadEntity'
import { EstDepPro } from '@Entity/EstDepProEntity'
import { Response, Request } from 'express'

export const createCiudad = async (req: Request, res: Response): Promise<void> => {
  try {
    const { code, name, idEDP } = req.body
    const ciudad = new Ciudad()
    ciudad.code = code
    ciudad.name = name
    const idEDPEntity = new EstDepPro()
    idEDPEntity.id = idEDP.id
    ciudad.idEDP = idEDPEntity
    await ciudad.save()
    res.status(200).json(ciudad)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllCiudad = async (_req: Request, res: Response): Promise<void> => {
  try {
    const ciudades = await Ciudad.find()
    res.status(200).json(ciudades)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateUCiudad = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const ciudad = await Ciudad.findOneBy({ id: req.query.id as string })
    if (ciudad == null) res.status(404).json({ message: ' Ciudad not found' })
    const ciudadUpdate = Ciudad.update({ id: req.query.id as string }, req.body)
    res.status(200).json(ciudadUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteCiudad = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await Ciudad.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'Ciudad not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findById = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const ciudad = await Ciudad.findOneBy({ id: req.query.id as string })
    if (ciudad == null) res.status(404).json({ message: 'Ciudad nor found' })
    res.status(200).json(ciudad)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
