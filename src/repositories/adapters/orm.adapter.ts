export interface ORMAdapter {
  create<T>(modelName: string, data: any): Promise<T>;
  findUnique<T>(modelName: string, where: any): Promise<T | null>;
  findUniqueOrThrow<T>(modelName: string, where: any): Promise<T>;
  findMany<T>(modelName: string, args?: any): Promise<T[]>;
  update<T>(modelName: string, where: any, data: any): Promise<T>;
  delete<T>(modelName: string, where: any): Promise<T>;
}
