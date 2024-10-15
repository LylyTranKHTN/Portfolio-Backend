import { Body, Controller, Get, Post, SuccessResponse } from 'tsoa'
import { ThemeDTO } from '../dtos/themeDto.js'
import { ThemeCreationParams, ThemeService } from '../services/themeService.js'

export class ThemeController extends Controller {
  private themeService: ThemeService

  constructor() {
    super()
    this.themeService = new ThemeService()
  }

  @Get()
  public async getLatestTheme(): Promise<ThemeDTO> {
    return this.themeService.getLastest()
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createTheme(
    @Body() requestBody: ThemeCreationParams,
  ): Promise<void> {
    this.setStatus(201) // set return status 201
    this.themeService.create(requestBody)
    return
  }
}
