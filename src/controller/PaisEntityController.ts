// ---- Paisment keyword 'Pais' or 'pais' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { Pais } from '@Entity/PaisEntity'

export const createPais = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, code } = req.body
    const pais = new Pais()
    // ------Add your code the create------ //
    pais.code = code
    pais.name = name
    // ------Ende your code the create------ //
    await pais.save()
    res.status(200).json(pais)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllPais = async (_req: Request, res: Response): Promise<void> => {
  try {
    const pais = await Pais.find()
    res.status(200).json(pais)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updatePais = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const pais = await Pais.findOneBy({ id: req.query.id as string })
    if (pais == null) res.status(404).json({ message: ' Pais not found' })
    const paisUpdate = Pais.update({ id: req.query.id as string }, req.body)
    res.status(200).json(paisUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deletePais = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await Pais.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'Pais not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdPais = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const pais = await Pais.findOneBy({ id: req.query.id as string })
    if (pais == null) res.status(404).json({ message: 'Pais nor found' })
    res.status(200).json(pais)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
