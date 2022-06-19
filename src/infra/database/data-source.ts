import { DataSource } from "typeorm"
// import { Show, User } from "../../entities"

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'netflix',
  entities: ["src/entities/*.entity.ts"],
  synchronize: true
})

async function databaseInitialize () {
  await AppDataSource.initialize().catch((e) => { throw e })
  console.log('DB Connection Estabilished Successfully!')
}

export default databaseInitialize
