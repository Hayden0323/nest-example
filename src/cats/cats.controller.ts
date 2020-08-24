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
  HttpStatus,
  HttpException,
  UseFilters,
  UsePipes,
  UseGuards,
  SetMetadata,
  UseInterceptors
} from '@nestjs/common'
import { Request, Response } from 'express'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'
import { ForbiddenException } from 'src/exception/forbidden.exception'
import { HttpExceptionFilter } from 'src/exception/http-exception.filter'
import { JoiValidationPipe } from 'src/pipe/joi-validation.pipe'
import { createCatSchema } from './schema/create-cat.schema'
import { ValidationPipe } from 'src/pipe/validation.pipe'
import { ParseIntPipe } from 'src/pipe/parse-int.pipe'
import { RolesGuard } from 'src/guard/roles.guard'
import { Roles } from './decorator/roles.decorator'
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor'
import { TransformInterceptor } from 'src/interceptor/transform.interceptor'
import { ErrorInterceptor } from 'src/interceptor/exception.interceptor'

@Controller('cats')
// @UseFilters(new HttpExceptionFilter())
@UseGuards(RolesGuard)
@UseInterceptors(ErrorInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  @UsePipes(new ValidationPipe())
  // @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new ForbiddenException()
    this.catsService.create(createCatDto)
  }

  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send()
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new HttpException(
    //   { status: HttpStatus.FORBIDDEN, error: 'This is a custom message' },
    //   403
    // )
    // throw new ForbiddenException()
    return this.catsService.findAll()
  }

  // @Get()
  // findAll(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([])
  // }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return await this.catsService.findOne(id)
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
