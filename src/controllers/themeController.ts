import {
  Body,
  Controller,
  Delete,
  Example,
  Get,
  Post,
  Put,
  Response,
  Route,
  SuccessResponse,
} from 'tsoa';
import { ThemeDTO, ThemeUpdateParams } from '../dtos/themeDto.js';
import { ThemeService } from '../services/themeService.js';

@Route('themes')
export class ThemesController extends Controller {
  private readonly themeService: ThemeService;

  constructor() {
    super();
    this.themeService = new ThemeService();
  }

  @Get('latest')
  @Response('404', 'Not Found')
  public async getLatestTheme(): Promise<ThemeDTO> {
    return this.themeService.getLastest();
  }

  @Response('404', 'Not Found') // Custom error response
  @SuccessResponse('201', 'Created')
  @Example<Omit<ThemeDTO, 'id'>>({
    name: 'secondary-color',
    title: 'Secondary Color',
    value: 'black',
    description: 'This is Secondary color',
  })
  @Post()
  public async createTheme(
    @Body() requestBody: Omit<ThemeDTO, 'id'>,
  ): Promise<ThemeDTO> {
    this.setStatus(201); // set return status 201
    return this.themeService.create(requestBody);
  }

  @Get()
  public async getAll(): Promise<ThemeDTO[]> {
    return this.themeService.getAll();
  }

  @Put('{themeId}')
  @Example<Partial<ThemeDTO>>({
    name: 'secondary-color',
    title: 'Secondary Color',
    value: 'black',
  })
  public async updateTheme(
    themeId: string,
    @Body() requestBody: Partial<ThemeDTO>,
  ): Promise<ThemeDTO> {
    return this.themeService.update(themeId, requestBody);
  }

  @Put()
  public async updateThemes(
    @Body() requestBody: ThemeUpdateParams[],
  ): Promise<ThemeDTO[]> {
    return this.themeService.updateAll(requestBody);
  }

  @Delete('{themeId}')
  public async deleteTheme(themeId: string): Promise<void> {
    return this.themeService.delete(themeId);
  }
}
