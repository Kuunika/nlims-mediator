import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('nlims/api/v0/fhir');
  await app.listen(3005);
}
bootstrap();
