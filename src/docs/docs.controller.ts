import { Controller, Get, Redirect, Query } from '@nestjs/common'

@Controller('docs')
export class DocsController {
  @Get()
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' }
    }
  }
}
