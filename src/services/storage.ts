import { supabase } from '../supabaseClient';

export const galeriaStorage = supabase.storage.from('galeria');
