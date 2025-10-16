// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Get the environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Throw an error if the variables are not set
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are not set in .env file');
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
