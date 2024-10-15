import { ThemeDTO } from '../dtos/themeDto.js'
import { Theme } from '../models/theme.model.js'

class ThemeMap {
  public static toDTO(theme: Theme): ThemeDTO {
    return {
      id: theme.id,
      name: theme.name,
      title: theme.title,
      value: theme.value,
      description: theme.description,
    }
  }

  public static toModel(raw: any): Theme {
    return Theme.build({
      id: raw.id,
      name: raw.name,
      title: raw.title,
      value: raw.value,
      description: raw.description,
      updatedAt: raw.updatedAt || new Date(),
      createdAt: raw.createdAt || new Date(),
    })
  }
}

export default ThemeMap
