import 'reflect-metadata'
import app from '@App/index'
import { AppDataSource } from '@DB/connection'

async function main (): Promise<void> {
  try {
    await AppDataSource.initialize()
    const PORT = 3000
    app.listen(PORT, () => { console.log(`listening in port ${PORT}`) })
  } catch (err) {
    console.error(err)
  }
}

void main()
