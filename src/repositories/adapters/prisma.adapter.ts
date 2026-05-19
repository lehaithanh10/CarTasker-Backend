import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { ORMAdapter } from './orm.adapter';

@Injectable()
export class PrismaAdapter implements ORMAdapter {
  constructor(private prisma: PrismaService) {}

  async create<T>(modelName: string, data: any): Promise<T> {
    return (this.prisma as any)[modelName].create({ data });
  }

  async findUnique<T>(modelName: string, where: any): Promise<T | null> {
    return (this.prisma as any)[modelName].findUnique({ where });
  }

  async findUniqueOrThrow<T>(modelName: string, where: any): Promise<T> {
    return (this.prisma as any)[modelName].findUniqueOrThrow({ where });
  }

  async findMany<T>(modelName: string, args?: any): Promise<T[]> {
    return (this.prisma as any)[modelName].findMany(args);
  }

  async update<T>(modelName: string, where: any, data: any): Promise<T> {
    return (this.prisma as any)[modelName].update({ where, data });
  }

  async delete<T>(modelName: string, where: any): Promise<T> {
    return (this.prisma as any)[modelName].delete({ where });
  }
}
