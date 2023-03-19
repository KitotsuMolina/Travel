// ---- Permisosment keyword 'Permisos' or 'permisos' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { Permisos } from '@Entity/PermisosEntity'

export const createPermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body
    const permisos = new Permisos()
    // ------Add your code the create------ //
    permisos.name = name
    // ------Ende your code the create------ //
    await permisos.save()
    res.status(200).json(permisos)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllPermisos = async (_req: Request, res: Response): Promise<void> => {
  try {
    const permisos = await Permisos.find()
    res.status(200).json(permisos)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updatePermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const permisos = await Permisos.findOneBy({ id: req.query.id as string })
    if (permisos == null) res.status(404).json({ message: ' Permisos not found' })
    const permisosUpdate = Permisos.update({ id: req.query.id as string }, req.body)
    res.status(200).json(permisosUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deletePermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await Permisos.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'Permisos not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdPermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const permisos = await Permisos.findOneBy({ id: req.query.id as string })
    if (permisos == null) res.status(404).json({ message: 'Permisos nor found' })
    res.status(200).json(permisos)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
