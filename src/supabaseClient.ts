// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://uyckfqoyjzoynhcxqksx.supabase.co'; 
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Y2tmcW95anpveW5oY3hxa3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjUwOTMsImV4cCI6MjA1OTkwMTA5M30.AtxETB1ghZgkyMkSzRg9Gus2CZYzF6b65YeWrG6XUms';

export const supabase = createClient(supabaseUrl, supabaseKey);
