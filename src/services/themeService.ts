import { ThemeDTO } from '../dtos/themeDto.js';
import ThemeMap from '../mappers/ThemeMap.js';
import { Theme } from '../models/theme.model.js';
import { IThemeRepo } from '../repositories/IThemeRepo.js';
import ThemeRepo from '../repositories/ThemeRepo.js';

export type ThemeCreationParams = Omit<Theme, 'id'>;

export class ThemeService {
  private themeRepo: IThemeRepo;

  public constructor() {
    this.themeRepo = new ThemeRepo();
  }

  public async getLastest(): Promise<ThemeDTO> {
    // find theme with lastest update date
    const theme = await this.themeRepo.getLastestTheme();

    if (!theme) {
      throw new Error('Theme not found');
    }

    return {
      id: theme.id,
      name: theme.name,
      title: theme.title,
      value: theme.value,
    };
  }

  public async create(
    themeCreationParams: Omit<ThemeDTO, 'id'>,
  ): Promise<ThemeDTO> {
    try {
      const newTheme: ThemeDTO = await this.themeRepo.save(
        ThemeMap.toModel(themeCreationParams),
      );
      return newTheme;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save theme');
    }
  }

  public async getAll(): Promise<ThemeDTO[]> {
    const themes = await this.themeRepo.getAll();

    return themes.map((theme) => ThemeMap.toDTO(theme));
  }

  public async update(
    themeId: string,
    themeCreationParams: Omit<ThemeDTO, 'id'>,
  ): Promise<ThemeDTO> {
    const theme = await this.themeRepo.get(themeId);

    const updatedTheme = await this.themeRepo.save({
      ...theme,
      ...themeCreationParams,
    });

    return updatedTheme;
  }
}
