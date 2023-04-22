// ---- Comentariosment keyword 'Comentarios' or 'comentarios' for your entity in lower case and capitalize
import { Response, Request } from 'express'
import { Comentarios } from '@Entity/ComentariosEntity'
import { People } from '@Entity/PeopleEntity'
import { PuntosInteres } from '@Entity/PuntosInteresEntity'

export const createComentarios = async (req: Request, res: Response): Promise<void> => {
  try {
    const { comentario, people, puntosInteres, puntuacion } = req.body
    const comentarios = new Comentarios()
    // ------Add your code the create------ //
    comentarios.comentarios = comentario
    comentarios.puntuacion = puntuacion
    const peopleEntity = new People()
    peopleEntity.id = people.id
    comentarios.idPeople = peopleEntity
    const puntosInteresEntity = new PuntosInteres()
    puntosInteresEntity.id = puntosInteres.id
    comentarios.idPuntosInteres = puntosInteresEntity
    // ------Ende your code the create------ //
    await comentarios.save()
    res.status(200).json(comentarios)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findAllComentarios = async (_req: Request, res: Response): Promise<void> => {
  try {
    const comentarios = await Comentarios.find()
    res.status(200).json(comentarios)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const updateComentarios = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const comentarios = await Comentarios.findOneBy({ id: req.query.id as string })
    if (comentarios == null) res.status(404).json({ message: ' Comentarios not found' })
    const comentariosUpdate = Comentarios.update({ id: req.query.id as string }, req.body)
    res.status(200).json(comentariosUpdate)
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const deleteComentarios = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const result = await Comentarios.delete(+req.query.id)
    if (result.affected === 0) {
      res.status(404).json({ message: 'Comentarios not found' })
    } else {
      res.status(204).json({ message: 'Deleted successfully' })
    }
  } catch (e: Error | any) {
    console.error(e)
    res.status(404).json(e.message)
  }
}

export const findByIdComentarios = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.query.id == null) throw new Error('Not null id')
    const comentarios = await Comentarios.findOneBy({ id: req.query.id as string })
    if (comentarios == null) res.status(404).json({ message: 'Comentarios nor found' })
    res.status(200).json(comentarios)
  } catch (e: Error | any) {
    console.log(e)
    res.status(404).json(e.message)
  }
}
