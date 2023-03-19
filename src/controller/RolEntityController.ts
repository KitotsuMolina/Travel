// ---- Rolment keyword 'Rol' or 'rol' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { Rol } from '@Entity/RolEntity'

export const createRol = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body
    const rol = new Rol()
    // ------Add your code the create------ //
    rol.name = name
    // ------Ende your code the create------ //
    await rol.save()
    res.status(200).json(rol)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllRol = async (_req: Request, res: Response): Promise<void> => {
  try {
    const rol = await Rol.find()
    res.status(200).json(rol)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateRol = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const rol = await Rol.findOneBy({ id: req.query.id as string })
    if (rol == null) res.status(404).json({ message: ' Rol not found' })
    const rolUpdate = Rol.update({ id: req.query.id as string }, req.body)
    res.status(200).json(rolUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteRol = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await Rol.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'Rol not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdRol = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const rol = await Rol.findOneBy({ id: req.query.id as string })
    if (rol == null) res.status(404).json({ message: 'Rol nor found' })
    res.status(200).json(rol)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
