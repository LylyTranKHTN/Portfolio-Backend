import { ThemeDTO } from '../dtos/themeDto.js'
import { Theme } from '../models/theme.model.js'
import { IThemeRepo } from '../repositories/IThemeRepo.js'
import ThemeRepo from '../repositories/ThemeRepo.js'

export type ThemeCreationParams = Omit<Theme, 'id'>

export class ThemeService {
  private themeRepo: IThemeRepo

  public constructor() {
    this.themeRepo = new ThemeRepo()
  }

  public async getLastest(): Promise<ThemeDTO> {
    // find theme with lastest update date
    const theme = await this.themeRepo.getLastestTheme()

    if (!theme) {
      throw new Error('Theme not found')
    }

    return {
      id: theme.id,
      name: theme.name,
      title: theme.title,
      value: theme.value,
    }
  }

  public create(themeCreationParams: ThemeCreationParams): Theme {
    return {
      id: Math.floor(Math.random() * 10000).toString(), // Random
      ...themeCreationParams,
    }
  }
}
