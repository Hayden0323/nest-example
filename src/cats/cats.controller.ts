import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Redirect
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  @Redirect('https://docs.nestjs.com', 302)
  findAll(@Req() request: Request): string {
    return 'This action return all cats';
  }
}
