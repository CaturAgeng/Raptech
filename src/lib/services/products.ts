import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import type { Product } from "@/lib/types/database"

// Fallback data for when Supabase is not configured
const fallbackProducts: Product[] = [
  {
    id: "1",
    name: "Gaming Laptop RTX 4080 Custom",
    description: "Laptop gaming premium dengan performa tinggi yang dapat dikustomisasi sesuai kebutuhan gaming Anda.",
    price: 25999000,
    original_price: 28999000,
    category: "Laptop",
    brand: "CustomTech",
    image_urls: ["/placeholder.svg?height=300&width=300"],
    rating: 4.8,
    review_count: 124,
    in_stock: true,
    badge: "Bestseller",
    customizable: true,
    custom_options: {
      processor: [
        { name: "Intel Core i7-13700H", price: 0 },
        { name: "Intel Core i9-13900H", price: 3000000 },
        { name: "Intel Core i9-13900HX", price: 5000000 },
      ],
      ram: [
        { name: "16GB DDR5", price: 0 },
        { name: "32GB DDR5", price: 4000000 },
        { name: "64GB DDR5", price: 12000000 },
      ],
      storage: [
        { name: "512GB NVMe SSD", price: 0 },
        { name: "1TB NVMe SSD", price: 2000000 },
        { name: "2TB NVMe SSD", price: 6000000 },
      ],
      color: [
        { name: "Hitam", price: 0 },
        { name: "Putih", price: 500000 },
        { name: "Merah", price: 500000 },
      ],
    },
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "iPhone 15 Pro Custom",
    description: "Smartphone premium dengan kustomisasi warna dan storage sesuai kebutuhan Anda.",
    price: 18999000,
    original_price: 21999000,
    category: "Smartphone",
    brand: "Apple",
    image_urls: ["/placeholder.svg?height=300&width=300"],
    rating: 4.9,
    review_count: 89,
    in_stock: true,
    badge: "New",
    customizable: true,
    custom_options: {
      storage: [
        { name: "128GB", price: 0 },
        { name: "256GB", price: 2000000 },
        { name: "512GB", price: 4000000 },
        { name: "1TB", price: 8000000 },
      ],
      color: [
        { name: "Natural Titanium", price: 0 },
        { name: "Blue Titanium", price: 0 },
        { name: "White Titanium", price: 0 },
        { name: "Black Titanium", price: 0 },
      ],
    },
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "MacBook Pro M3 Custom",
    description: "Laptop profesional dengan chip M3 yang powerful untuk creative professionals.",
    price: 32999000,
    original_price: 35999000,
    category: "Laptop",
    brand: "Apple",
    image_urls: ["/placeholder.svg?height=300&width=300"],
    rating: 4.7,
    review_count: 256,
    in_stock: true,
    badge: "Premium",
    customizable: true,
    custom_options: {
      chip: [
        { name: "M3", price: 0 },
        { name: "M3 Pro", price: 5000000 },
        { name: "M3 Max", price: 12000000 },
      ],
      memory: [
        { name: "8GB", price: 0 },
        { name: "16GB", price: 4000000 },
        { name: "32GB", price: 8000000 },
      ],
      storage: [
        { name: "512GB SSD", price: 0 },
        { name: "1TB SSD", price: 4000000 },
        { name: "2TB SSD", price: 8000000 },
      ],
      color: [
        { name: "Space Gray", price: 0 },
        { name: "Silver", price: 0 },
      ],
    },
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "AirPods Pro 3 Custom",
    description: "Earbuds premium dengan noise cancellation dan kustomisasi warna.",
    price: 4999000,
    original_price: 5999000,
    category: "Audio",
    brand: "Apple",
    image_urls: ["/placeholder.svg?height=300&width=300"],
    rating: 4.8,
    review_count: 342,
    in_stock: true,
    badge: "Popular",
    customizable: true,
    custom_options: {
      color: [
        { name: "White", price: 0 },
        { name: "Black", price: 500000 },
        { name: "Red", price: 500000 },
      ],
    },
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
]

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    if (!isSupabaseConfigured() || !supabase) {
      console.warn("Using fallback product data. Configure Supabase for live data.")
      return fallbackProducts
    }

    try {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching products:", error)
        return fallbackProducts
      }

      return data || fallbackProducts
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackProducts
    }
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    if (!isSupabaseConfigured() || !supabase) {
      return fallbackProducts.filter((product) => product.category === category)
    }

    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching products by category:", error)
        return fallbackProducts.filter((product) => product.category === category)
      }

      return data || []
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackProducts.filter((product) => product.category === category)
    }
  }

  static async getProductById(id: string): Promise<Product | null> {
    if (!isSupabaseConfigured() || !supabase) {
      return fallbackProducts.find((product) => product.id === id) || null
    }

    try {
      const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

      if (error) {
        console.error("Error fetching product:", error)
        return fallbackProducts.find((product) => product.id === id) || null
      }

      return data
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackProducts.find((product) => product.id === id) || null
    }
  }

  static async searchProducts(query: string): Promise<Product[]> {
    if (!isSupabaseConfigured() || !supabase) {
      return fallbackProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    }

    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("name", `%${query}%`)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error searching products:", error)
        return fallbackProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
      }

      return data || []
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    }
  }

  static async getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
    if (!isSupabaseConfigured() || !supabase) {
      return fallbackProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice)
    }

    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .gte("price", minPrice)
        .lte("price", maxPrice)
        .order("price", { ascending: true })

      if (error) {
        console.error("Error fetching products by price range:", error)
        return fallbackProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice)
      }

      return data || []
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice)
    }
  }

  static async getFeaturedProducts(limit = 4): Promise<Product[]> {
    if (!isSupabaseConfigured() || !supabase) {
      return fallbackProducts.slice(0, limit)
    }

    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .in("badge", ["Bestseller", "Popular", "New"])
        .limit(limit)
        .order("rating", { ascending: false })

      if (error) {
        console.error("Error fetching featured products:", error)
        return fallbackProducts.slice(0, limit)
      }

      return data || fallbackProducts.slice(0, limit)
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackProducts.slice(0, limit)
    }
  }
}
