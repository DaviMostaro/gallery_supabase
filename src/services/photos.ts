import { supabase } from '../supabaseClient';
import { Photo } from '../types/Photo';

export const getAll = async (): Promise<Photo[]> => {
  let list: Photo[] = [];

  const { data, error } = await supabase
    .storage
    .from('galeria') 
    .list('images', {
      limit: 100,
      offset: 0,
    });

  if (error) {
    alert("Erro ao listar imagens:" + error.message);
    return [];
  }

  for (const item of data || []) {
    const { data: url } = supabase
      .storage
      .from('galeria')
      .getPublicUrl(`images/${item.name}`);

    list.push({
      name: item.name,
      url: url.publicUrl,
    });
  }

  return list;
};

export const uploadPhoto = async (file: File): Promise<Photo | null> => {
    if (!file.type.startsWith('image/')) {
      alert("Arquivo inválido. Apenas imagens são permitidas.");
      return null;
    }
  
    const fileName = `${Date.now()}-${file.name}`;
  
    const { data, error } = await supabase.storage
      .from('galeria')
      .upload(`images/${fileName}`, file);
  
    if (error) {
      alert("Erro ao fazer upload: " + error.message);
      return null;
    }
  
    const { data: urlData } = supabase
      .storage
      .from('galeria')
      .getPublicUrl(`images/${fileName}`);
  
    return {
      name: fileName,
      url: urlData.publicUrl,
    };
  };

export const deletePhoto = async (fileName: string): Promise<boolean> => {
    const { error } = await supabase.storage
      .from('galeria')
      .remove([`images/${fileName}`]);
  
    if (error) {
      alert('Erro ao deletar imagem:' + error.message);
      return false;
    }
  
    return true;
};
