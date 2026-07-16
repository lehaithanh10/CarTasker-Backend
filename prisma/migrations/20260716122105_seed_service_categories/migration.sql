INSERT INTO service_categories (id, name, slug, is_active, created_at) VALUES
  (gen_random_uuid(), 'Car Service',          'car-service',          TRUE, NOW()),
  (gen_random_uuid(), 'Mobile Tyres',         'mobile-tyres',         TRUE, NOW()),
  (gen_random_uuid(), 'Mobile Detailing',     'mobile-detailing',     TRUE, NOW()),
  (gen_random_uuid(), 'Roadside Assistance',  'roadside-assistance',  TRUE, NOW()),
  (gen_random_uuid(), 'Mobile Batteries',     'mobile-batteries',     TRUE, NOW()),
  (gen_random_uuid(), 'Key Programming',      'key-programming',      TRUE, NOW()),
  (gen_random_uuid(), 'Vehicle Inspection',   'vehicle-inspection',   TRUE, NOW())
ON CONFLICT (slug) DO NOTHING;
