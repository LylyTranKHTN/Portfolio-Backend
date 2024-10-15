import { Theme } from '../models/theme.model.js'
import Repo from './IRepo.js'

export interface IThemeRepo extends Repo<Theme> {
  getLastestTheme(): Promise<Theme | null>
}
