import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { logger } from './common/middleware/loggerfn.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(logger)
  await app.listen(3000)
  console.log('http:localhost:3000')
}
bootstrap()
