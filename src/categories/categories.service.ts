import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@/repositories/category.repository';

@Injectable()
export class CategoriesService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getAllCategories() {
    return this.categoryRepository.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  async getCategoryById(categoryId: string) {
    return this.categoryRepository.findUnique({ id: categoryId });
  }
}
