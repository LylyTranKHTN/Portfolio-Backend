import { Theme } from '../models/theme.model.js'
import { IThemeRepo } from './IThemeRepo.js'

class ThemeRepo implements IThemeRepo {
  public async exists(id: string): Promise<boolean> {
    const theme = await Theme.findOne({ where: { id } })

    return !!theme
  }

  public async save(t: Theme): Promise<any> {
    return t.save()
  }

  public async delete(t: Theme): Promise<any> {
    return t.destroy()
  }

  public async getLastestTheme(): Promise<Theme | null> {
    const theme = await Theme.findOne({
      order: [['updatedAt', 'DESC']],
    })

    return theme
  }
}

export default ThemeRepo
