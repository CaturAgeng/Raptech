export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          original_price: number | null
          category: string
          brand: string
          image_urls: string[]
          rating: number
          review_count: number
          in_stock: boolean
          badge: string | null
          customizable: boolean
          custom_options: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          original_price?: number | null
          category: string
          brand: string
          image_urls: string[]
          rating?: number
          review_count?: number
          in_stock?: boolean
          badge?: string | null
          customizable?: boolean
          custom_options?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          original_price?: number | null
          category?: string
          brand?: string
          image_urls?: string[]
          rating?: number
          review_count?: number
          in_stock?: boolean
          badge?: string | null
          customizable?: boolean
          custom_options?: any
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          icon: string
          product_count: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          icon: string
          product_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          icon?: string
          product_count?: number
        }
      }
      reviews: {
        Row: {
          id: string
          product_id: string
          user_id: string
          user_name: string
          rating: number
          comment: string
          verified: boolean
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_id: string
          user_name: string
          rating: number
          comment: string
          verified?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          rating?: number
          comment?: string
          verified?: boolean
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          quantity: number
          custom_options: any
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          quantity: number
          custom_options?: any
          created_at?: string
        }
        Update: {
          id?: string
          quantity?: number
          custom_options?: any
        }
      }
    }
  }
}

export type Product = Database["public"]["Tables"]["products"]["Row"]
export type Category = Database["public"]["Tables"]["categories"]["Row"]
export type Review = Database["public"]["Tables"]["reviews"]["Row"]
export type CartItem = Database["public"]["Tables"]["cart_items"]["Row"]
