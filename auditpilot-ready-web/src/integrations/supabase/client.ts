// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://weaubzazkgltgvnymlkd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlYXViemF6a2dsdGd2bnltbGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMTAxMDUsImV4cCI6MjA2NTc4NjEwNX0.f_xkK1mywhM73GtFn3erA7O4NJLe3BOOef0x4Cv0AVc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);