import { ORMAdapter } from './adapters/orm.adapter';

export abstract class BaseRepository<Entity, CreateInput, UpdateInput> {
  protected abstract readonly modelName: string;

  constructor(protected readonly ormAdapter: ORMAdapter) {}

  async create(data: CreateInput): Promise<Entity> {
    return this.ormAdapter.create<Entity>(this.modelName, data);
  }

  async findUnique(where: any): Promise<Entity | null> {
    return this.ormAdapter.findUnique<Entity>(this.modelName, where);
  }

  async findUniqueOrThrow(where: any): Promise<Entity> {
    return this.ormAdapter.findUniqueOrThrow<Entity>(this.modelName, where);
  }

  async findMany(args?: any): Promise<Entity[]> {
    return this.ormAdapter.findMany<Entity>(this.modelName, args);
  }

  async update(where: any, data: UpdateInput): Promise<Entity> {
    return this.ormAdapter.update<Entity>(this.modelName, where, data);
  }

  async delete(where: any): Promise<Entity> {
    return this.ormAdapter.delete<Entity>(this.modelName, where);
  }
}
