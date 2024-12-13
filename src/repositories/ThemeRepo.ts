import { ThemeUpdateParams } from '../dtos/themeDto.js';
import { Theme } from '../models/theme.model.js';
import { IThemeRepo } from './IThemeRepo.js';

class ThemeRepo implements IThemeRepo {
  public async exists(id: string): Promise<boolean> {
    let theme;
    try {
      theme = await Theme.findOne({ where: { id } });
    } catch (error) {
      console.error(error);
    }

    return !!theme;
  }

  public async get(id: string): Promise<Theme | null> {
    let theme: Theme | null = null;
    try {
      theme = await Theme.findOne({ where: { id } });
    } catch (error) {
      console.error(error);
    }

    if (!theme) {
      return null;
    }

    return theme;
  }

  public async create(t: Omit<Theme, 'id'>): Promise<Theme> {
    try {
      const savedTheme: Theme = await Theme.create({ ...t });

      return savedTheme;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save theme');
    }
  }

  public async update(t: Theme): Promise<Theme> {
    try {
      t.updatedAt = new Date();
      return await t.save();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save theme');
    }
  }

  public async delete(t: Theme): Promise<any> {
    return t.destroy();
  }

  public async getLastestTheme(): Promise<Theme | null> {
    try {
      const theme = await Theme.findOne({
        order: [['updatedAt', 'DESC']],
      });

      return theme;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to get latest theme');
    }
  }

  public async getAll(): Promise<Theme[]> {
    try {
      const themes = await Theme.findAll();

      return themes;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get all themes');
    }
  }

  public async updateAll(
    themeUpdateParams: ThemeUpdateParams[],
  ): Promise<Theme[]> {
    const updatedThemes = await Promise.all(
      themeUpdateParams.map(async (themeUpdateParam) => {
        const theme = await this.get(themeUpdateParam.id);

        if (!theme) {
          throw new Error('Theme not found');
        }

        theme.value = themeUpdateParam.value;

        return this.update(theme);
      }),
    );

    return updatedThemes;
  }
}

export default ThemeRepo;
