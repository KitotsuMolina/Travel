// ---- Peoplement keyword 'People' or 'people' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { People } from '@Entity/PeopleEntity'
import { Ciudad } from '@Entity/CiudadEntity'

export const createPeople = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstname, lastname, email, documento, ciudad } = req.body
    const people = new People()
    // ------Add your code the create------ //
    people.firstname = firstname
    people.lastname = lastname
    people.email = email
    people.documento = documento
    const ciudadEntity = new Ciudad()
    ciudadEntity.id = ciudad.id
    people.idCiudad = ciudadEntity
    // ------Ende your code the create------ //
    await people.save()
    res.status(200).json(people)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllPeople = async (_req: Request, res: Response): Promise<void> => {
  try {
    const people = await People.find()
    res.status(200).json(people)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updatePeople = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const people = await People.findOneBy({ id: req.query.id as string })
    if (people == null) res.status(404).json({ message: ' People not found' })
    const peopleUpdate = People.update({ id: req.query.id as string }, req.body)
    res.status(200).json(peopleUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deletePeople = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await People.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'People not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdPeople = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const people = await People.findOneBy({ id: req.query.id as string })
    if (people == null) res.status(404).json({ message: 'People nor found' })
    res.status(200).json(people)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
