import { createClient } from "@supabase/supabase-js"

// Check if we're in development and provide fallback values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

// Only create client if we have real values
let supabase: ReturnType<typeof createClient> | null = null

if (supabaseUrl !== "https://placeholder.supabase.co" && supabaseAnonKey !== "placeholder-key") {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

// Export a safe client that handles missing configuration
export { supabase }

// Client-side Supabase client (singleton pattern)
export const createClientComponentClient = () => {
  if (!supabase) {
    console.warn(
      "Supabase not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables.",
    )
    return null
  }
  return supabase
}

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabase !== null
}
