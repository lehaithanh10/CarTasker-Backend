import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed service categories
  const categories = [
    { name: 'Car Service', slug: 'car-service' },
    { name: 'Mobile Tyres', slug: 'mobile-tyres' },
    { name: 'Mobile Detailing', slug: 'mobile-detailing' },
    { name: 'Roadside Assistance', slug: 'roadside-assistance' },
    { name: 'Mobile Batteries', slug: 'mobile-batteries' },
    { name: 'Key Programming', slug: 'key-programming' },
    { name: 'Vehicle Inspection', slug: 'vehicle-inspection' },
  ];

  for (const category of categories) {
    const existingCategory = await prisma.serviceCategory.findUnique({
      where: { slug: category.slug },
    });

    if (!existingCategory) {
      await prisma.serviceCategory.create({
        data: category,
      });
      console.log(`✅ Created service category: ${category.name}`);
    } else {
      console.log(`⏭️  Service category already exists: ${category.name}`);
    }
  }

  console.log('\n✨ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
