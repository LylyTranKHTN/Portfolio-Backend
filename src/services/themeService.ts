import { ThemeDTO, ThemeUpdateParams } from '../dtos/themeDto.js';
import ThemeMap from '../mappers/ThemeMap.js';
import { Theme } from '../models/theme.model.js';
import { IThemeRepo } from '../repositories/IThemeRepo.js';
import ThemeRepo from '../repositories/ThemeRepo.js';

export type ThemeCreationParams = Omit<Theme, 'id'>;

export class ThemeService {
  private readonly themeRepo: IThemeRepo;

  public constructor() {
    this.themeRepo = new ThemeRepo();
  }

  public async getLastest(): Promise<ThemeDTO> {
    // find theme with lastest update date
    const theme = await this.themeRepo.getLastestTheme();

    if (!theme) {
      throw new Error('Theme not found');
    }

    return ThemeMap.toDTO(theme);
  }

  public async create(
    themeCreationParams: Omit<ThemeDTO, 'id'>,
  ): Promise<ThemeDTO> {
    try {
      const newTheme: ThemeDTO = await this.themeRepo.save(
        ThemeMap.toModel(themeCreationParams),
      );
      return newTheme;
    } catch (error: any) {
      throw new Error('Failed to save theme', error);
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

  public async updateAll(
    themeUpdateParams: ThemeUpdateParams[],
  ): Promise<ThemeDTO[]> {
    const updatedList = await this.themeRepo.updateAll(themeUpdateParams);
    return updatedList.map((theme) => ThemeMap.toDTO(theme));
  }
}
