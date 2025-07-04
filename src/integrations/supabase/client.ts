// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pcttljpstjggdjjlzdww.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjdHRsanBzdGpnZ2Rqamx6ZHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MTc1NzEsImV4cCI6MjA2NzE5MzU3MX0.W55Y1iaX_lTADxijIVILxnNNLj4kic6XAnKVH3gEFQM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});