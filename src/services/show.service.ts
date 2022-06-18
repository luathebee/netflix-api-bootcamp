import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import { Show } from "../entities/"
import { NotFoundException } from "../exceptions"

interface CreateShowTDO {
  title: string
}

class ShowService {
  private showRepository: Repository<Show>

  constructor () {
    this.showRepository = AppDataSource.getRepository(Show)
  }

  list () {
  /**
   * Retorna todos o shows
   *
   * @returns Retorna todos o shows
   *
   * @beta
   */
    return this.showRepository.find()
  }

  /**
   * Retorna o show solicitado
   *
   * @returns Retorna o show solicitado
   *
   * @beta
   */
  async findShow (id: number) {
    const show = await this.showRepository.findOne({ where: { id } })

    if (show) {
      return show
    }
    throw new NotFoundException(`Show (id: ${id}) não encontrado`)
  }

  create (movie: CreateShowTDO) {
  /**
   * Cria um show
   *
   * @returns O show criado
   *
   */
    return this.showRepository.save(movie)
  }

  /**
   * Deleta um show por id
   *
   * @returns o show deletado
   *
   * @beta
   */
  async delete (id: number) {
    const show = await this.showRepository.delete(id)
    if (show.affected) {
      return show
    }
    throw new NotFoundException(`Show (id: ${id}) não encontrado`)
  }
}

export default ShowService
