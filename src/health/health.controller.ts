import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Health checks used by Fly.io, smoke tests, and uptime monitors.
 *
 * GET /health       — liveness.  Returns 200 immediately.  NO DB call.
 *                     Fly uses this to detect crashed processes.  If you add a
 *                     DB call here, a DB blip restarts every machine in the fleet.
 *
 * GET /health/ready — readiness.  Runs `SELECT 1` via Prisma.
 *                     Returns 200 { status:"ok", db:"ok" } when the DB is reachable.
 *                     Returns 503 when it isn't.  Used by the smoke check in
 *                     fly-deploy.yml and by Better Stack uptime monitors.
 */
@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Liveness check — is the process alive?' })
  @ApiResponse({ status: 200, description: 'Process is alive' })
  liveness(): { status: string } {
    return { status: 'ok' };
  }

  @Get('ready')
  @ApiOperation({ summary: 'Readiness check — can the app reach the database?' })
  @ApiResponse({ status: 200, description: 'App is ready to serve traffic' })
  @ApiResponse({ status: 503, description: 'Database unreachable' })
  async readiness(): Promise<{ status: string; db: string }> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { status: 'ok', db: 'ok' };
    } catch {
      // Don't leak internal error details — just signal not-ready.
      throw new ServiceUnavailableException({ status: 'error', db: 'unreachable' });
    }
  }
}
