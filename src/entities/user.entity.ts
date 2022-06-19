import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('user')
class User {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ length: 100, unique: true })
    email: string

  @Column({ length: 100 })
    password: string
}

export default User
