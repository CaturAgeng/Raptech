-- Insert categories
INSERT INTO categories (name, icon, product_count) VALUES
('Laptop', '💻', 45),
('Smartphone', '📱', 32),
('Audio', '🎧', 28),
('Smart Watch', '⌚', 19),
('Accessories', '🔌', 67),
('Gaming', '🎮', 23);

-- Insert sample products
INSERT INTO products (
  name, description, price, original_price, category, brand, 
  image_urls, rating, review_count, in_stock, badge, customizable, custom_options
) VALUES
(
  'Gaming Laptop RTX 4080 Custom',
  'Laptop gaming premium dengan performa tinggi yang dapat dikustomisasi sesuai kebutuhan gaming Anda. Dilengkapi dengan prosesor terbaru dan kartu grafis RTX 4080 untuk pengalaman gaming yang luar biasa.',
  25999000,
  28999000,
  'Laptop',
  'CustomTech',
  ARRAY['/placeholder.svg?height=500&width=500'],
  4.8,
  124,
  true,
  'Bestseller',
  true,
  '{
    "processor": [
      {"name": "Intel Core i7-13700H", "price": 0},
      {"name": "Intel Core i9-13900H", "price": 3000000},
      {"name": "Intel Core i9-13900HX", "price": 5000000}
    ],
    "ram": [
      {"name": "16GB DDR5", "price": 0},
      {"name": "32GB DDR5", "price": 4000000},
      {"name": "64GB DDR5", "price": 12000000}
    ],
    "storage": [
      {"name": "512GB NVMe SSD", "price": 0},
      {"name": "1TB NVMe SSD", "price": 2000000},
      {"name": "2TB NVMe SSD", "price": 6000000}
    ],
    "color": [
      {"name": "Hitam", "price": 0},
      {"name": "Putih", "price": 500000},
      {"name": "Merah", "price": 500000}
    ]
  }'
),
(
  'iPhone 15 Pro Custom',
  'Smartphone premium dengan kustomisasi warna dan storage sesuai kebutuhan Anda.',
  18999000,
  21999000,
  'Smartphone',
  'Apple',
  ARRAY['/placeholder.svg?height=500&width=500'],
  4.9,
  89,
  true,
  'New',
  true,
  '{
    "storage": [
      {"name": "128GB", "price": 0},
      {"name": "256GB", "price": 2000000},
      {"name": "512GB", "price": 4000000},
      {"name": "1TB", "price": 8000000}
    ],
    "color": [
      {"name": "Natural Titanium", "price": 0},
      {"name": "Blue Titanium", "price": 0},
      {"name": "White Titanium", "price": 0},
      {"name": "Black Titanium", "price": 0}
    ]
  }'
),
(
  'MacBook Pro M3 Custom',
  'Laptop profesional dengan chip M3 yang powerful untuk creative professionals.',
  32999000,
  35999000,
  'Laptop',
  'Apple',
  ARRAY['/placeholder.svg?height=500&width=500'],
  4.7,
  256,
  true,
  'Premium',
  true,
  '{
    "chip": [
      {"name": "M3", "price": 0},
      {"name": "M3 Pro", "price": 5000000},
      {"name": "M3 Max", "price": 12000000}
    ],
    "memory": [
      {"name": "8GB", "price": 0},
      {"name": "16GB", "price": 4000000},
      {"name": "32GB", "price": 8000000}
    ],
    "storage": [
      {"name": "512GB SSD", "price": 0},
      {"name": "1TB SSD", "price": 4000000},
      {"name": "2TB SSD", "price": 8000000}
    ],
    "color": [
      {"name": "Space Gray", "price": 0},
      {"name": "Silver", "price": 0}
    ]
  }'
);
