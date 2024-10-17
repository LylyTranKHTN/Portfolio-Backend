import { Theme } from '../models/theme.model.js';
import IRepo from './IRepo.js';

export interface IThemeRepo extends IRepo<Theme> {
  getAll(): Promise<Theme[]>;
  getLastestTheme(): Promise<Theme | null>;
  put(t: Theme): Promise<Theme>;
}
