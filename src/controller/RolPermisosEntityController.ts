// ---- RolPermisosment keyword 'RolPermisos' or 'rolPermisos' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { RolPermisos } from '@Entity/RolPermisosEntity'
import { Rol } from '@Entity/RolEntity'
import { Permisos } from '@Entity/PermisosEntity'

export const createRolPermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rol, permisos } = req.body
    const rolPermisos = new RolPermisos()
    // ------Add your code the create------ //
    const rolEntity = new Rol()
    rolEntity.id = rol.id
    rolPermisos.idRol = rolEntity
    const permisosEntity = new Permisos()
    permisosEntity.id = permisos.id
    rolPermisos.idPermisos = permisosEntity
    // ------Ende your code the create------ //
    await rolPermisos.save()
    res.status(200).json(rolPermisos)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllRolPermisos = async (_req: Request, res: Response): Promise<void> => {
  try {
    const rolPermisos = await RolPermisos.find()
    res.status(200).json(rolPermisos)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateRolPermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const rolPermisos = await RolPermisos.findOneBy({ id: req.query.id as string })
    if (rolPermisos == null) res.status(404).json({ message: ' RolPermisos not found' })
    const rolPermisosUpdate = RolPermisos.update({ id: req.query.id as string }, req.body)
    res.status(200).json(rolPermisosUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteRolPermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await RolPermisos.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'RolPermisos not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdRolPermisos = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const rolPermisos = await RolPermisos.findOneBy({ id: req.query.id as string })
    if (rolPermisos == null) res.status(404).json({ message: 'RolPermisos nor found' })
    res.status(200).json(rolPermisos)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
