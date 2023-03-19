// ---- EstDepProment keyword 'EstDepPro' or 'edp' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { EstDepPro } from '@Entity/EstDepProEntity'
import { Pais } from '@Entity/PaisEntity'

export const createEstDepPro = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, code, pais } = req.body
    const edp = new EstDepPro()
    // ------Add your code the create------ //
    edp.name = name
    edp.code = code
    const paisEntity = new Pais()
    paisEntity.id = pais.id
    edp.idPais = paisEntity
    // ------Ende your code the create------ //
    await edp.save()
    res.status(200).json(edp)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllEstDepPro = async (_req: Request, res: Response): Promise<void> => {
  try {
    const edp = await EstDepPro.find()
    res.status(200).json(edp)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateEstDepPro = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const edp = await EstDepPro.findOneBy({ id: req.query.id as string })
    if (edp == null) res.status(404).json({ message: ' EstDepPro not found' })
    const edpUpdate = EstDepPro.update({ id: req.query.id as string }, req.body)
    res.status(200).json(edpUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteEstDepPro = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await EstDepPro.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'EstDepPro not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdEstDepPro = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const edp = await EstDepPro.findOneBy({ id: req.query.id as string })
    if (edp == null) res.status(404).json({ message: 'EstDepPro nor found' })
    res.status(200).json(edp)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
