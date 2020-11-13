import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const prefix = 'api/v1';
  const port = process.env.NLIMS_MEDIATOR_PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Product Master API Docs')
    .setDescription('REST API documentation for the Product Master')
    .setVersion('1.0')
    .addTag('fhir')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${prefix}/docs`, app, document);

  app.setGlobalPrefix(prefix);
  await app.listen(port);
}

bootstrap();
