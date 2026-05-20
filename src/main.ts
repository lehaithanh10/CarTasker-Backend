import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors';

function parseCorsOrigins(raw?: string): string[] | '*' {
  if (!raw || raw.trim() === '*') return '*';
  return raw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS — comma-separated whitelist from CORS_ORIGINS env var, or '*' for dev only.
  app.enableCors({
    origin: parseCorsOrigins(process.env.CORS_ORIGINS),
    credentials: true,
  });

  // Global Logging Interceptor
  app.useGlobalInterceptors(new LoggingInterceptor());

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('CarTasker API')
    .setDescription('Backend API for CarTasker - Mobile car services marketplace')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addServer('http://localhost:3001', 'Development')
    .addServer('https://api.cartasker.com', 'Production')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`✅ Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation: http://localhost:${port}/api/docs`);
}

bootstrap().catch((err) => {
  console.error('❌ Error starting application:', err);
  process.exit(1);
});
