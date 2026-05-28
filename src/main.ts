import type { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { IoAdapter } from '@nestjs/platform-socket.io';
import type { ServerOptions } from 'socket.io';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors';

function parseCorsOrigins(raw?: string): string[] | '*' {
  if (!raw || raw.trim() === '*') return '*';
  return raw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

/**
 * IoAdapter that applies CORS at the Socket.IO server level.
 * Keeps `process.env` reads out of the gateway decorator (CLAUDE.md §6) —
 * bootstrap code (main.ts) is the one place env access is sanctioned.
 */
class CorsIoAdapter extends IoAdapter {
  constructor(
    app: INestApplicationContext,
    private readonly corsOptions: { origin: string[] | '*'; credentials: boolean },
  ) {
    super(app);
  }

  createIOServer(port: number, options?: ServerOptions): unknown {
    return super.createIOServer(port, { ...options, cors: this.corsOptions });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ── Security headers ────────────────────────────────────────────────────────
  // Helmet adds HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  // X-DNS-Prefetch-Control, etc.  CSP is intentionally disabled here — the
  // frontend owns it via next.config.js headers() + a future middleware.ts.
  app.use(helmet({ contentSecurityPolicy: false }));

  // ── CORS ────────────────────────────────────────────────────────────────────
  const corsOptions = {
    origin: parseCorsOrigins(process.env.CORS_ORIGINS),
    credentials: true,
  };

  // Socket.IO adapter — required for WebSocket gateway; configures CORS too
  app.useWebSocketAdapter(new CorsIoAdapter(app, corsOptions));

  // CORS for HTTP — same whitelist as the WebSocket layer
  app.enableCors(corsOptions);

  // Global Logging Interceptor
  app.useGlobalInterceptors(new LoggingInterceptor());

  // ── Swagger (dev/staging only) ───────────────────────────────────────────────
  // Never expose the open Swagger UI in production — it reveals the full API
  // surface to scanners.  Set SWAGGER_ENABLED=true in staging Fly secrets if you
  // want to browse it there (it's off by default in production).
  const swaggerEnabled =
    process.env.NODE_ENV !== 'production' || process.env.SWAGGER_ENABLED === 'true';

  if (swaggerEnabled) {
    const config = new DocumentBuilder()
      .setTitle('CarTasker API')
      .setDescription('Backend API for CarTasker - Mobile car services marketplace')
      .setVersion('1.0.0')
      .addBearerAuth()
      .addServer('http://localhost:8000', 'Local')
      .addServer('https://cartaskers-be-staging.fly.dev', 'Staging')
      .addServer('https://api.cartaskers.com.au', 'Production')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }

  const port = process.env.PORT || 8000;
  await app.listen(port);

  console.log(`Application is running on port ${port}`);
  if (swaggerEnabled) {
    console.log(`Swagger docs: http://localhost:${port}/api/docs`);
  }
}

bootstrap().catch((err) => {
  console.error('❌ Error starting application:', err);
  process.exit(1);
});
