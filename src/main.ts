import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Pick a Park API')
    .setDescription('The Pick a Park API ')
    .setVersion('1.0')
    .addTag('parking')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
