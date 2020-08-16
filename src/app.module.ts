import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DocsController } from './docs/docs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DocsController],
  providers: [AppService]
})
export class AppModule {}
