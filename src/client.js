import { createClient } from '@supabase/supabase-js';

const URL = 'https://qscmownjzaiuzjcmroap.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzY21vd25qemFpdXpqY21yb2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDU3NDMsImV4cCI6MjA0MDE4MTc0M30.30mDHgqQoD7fi_oiRdIxQu1u2T4Kn3Dr2nzkatnJVBI';

export const supabase = createClient(URL, API_KEY);
