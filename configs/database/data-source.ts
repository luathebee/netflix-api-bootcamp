import { DataSource } from "typeorm"
import Movie from "../../src/entities/movie.entity"

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'netflix',
  entities: [Movie],
  synchronize: true
})

async function databaseInitialize () {
  await AppDataSource.initialize().catch((e) => { console.error(e) })
  console.log('DB Connection Estabilished Successfully!')
}

export default databaseInitialize
