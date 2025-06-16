import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import type { Category } from "@/lib/types/database"

// Fallback data for when Supabase is not configured
const fallbackCategories: Category[] = [
  { id: "1", name: "Laptop", icon: "💻", product_count: 45, created_at: "2024-01-01T00:00:00Z" },
  { id: "2", name: "Smartphone", icon: "📱", product_count: 32, created_at: "2024-01-01T00:00:00Z" },
  { id: "3", name: "Audio", icon: "🎧", product_count: 28, created_at: "2024-01-01T00:00:00Z" },
  { id: "4", name: "Smart Watch", icon: "⌚", product_count: 19, created_at: "2024-01-01T00:00:00Z" },
  { id: "5", name: "Accessories", icon: "🔌", product_count: 67, created_at: "2024-01-01T00:00:00Z" },
  { id: "6", name: "Gaming", icon: "🎮", product_count: 23, created_at: "2024-01-01T00:00:00Z" },
]

export class CategoryService {
  static async getAllCategories(): Promise<Category[]> {
    if (!isSupabaseConfigured() || !supabase) {
      console.warn("Using fallback category data. Configure Supabase for live data.")
      return fallbackCategories
    }

    try {
      const { data, error } = await supabase.from("categories").select("*").order("name", { ascending: true })

      if (error) {
        console.error("Error fetching categories:", error)
        return fallbackCategories
      }

      return data || fallbackCategories
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
      return fallbackCategories
    }
  }

  static async updateProductCount(categoryName: string): Promise<void> {
    if (!isSupabaseConfigured() || !supabase) {
      console.warn("Supabase not configured. Cannot update product count.")
      return
    }

    try {
      // Get product count for category
      const { count } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("category", categoryName)

      // Update category product count
      const { error } = await supabase
        .from("categories")
        .update({ product_count: count || 0 })
        .eq("name", categoryName)

      if (error) {
        console.error("Error updating category product count:", error)
      }
    } catch (error) {
      console.error("Error connecting to Supabase:", error)
    }
  }
}
