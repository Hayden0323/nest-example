import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Redirect,
  Param,
  Body,
  Put,
  Delete,
  Res,
  HttpStatus
} from '@nestjs/common'
import { Request, Response } from 'express'
import { CreateCatDto } from './create-cat.dto'
import { UpdateCatDto } from './update-cat.dto'

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat'
  }

  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send()
  // }

  @Get()
  @Redirect('https://docs.nestjs.com', 302)
  findAll(@Req() request: Request): string {
    return 'This action return all cats'
  }

  // @Get()
  // findAll(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([])
  // }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action return a #${id} cat`
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
