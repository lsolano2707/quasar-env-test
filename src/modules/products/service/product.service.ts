import { api } from 'src/boot/axios';
// Types
import { Product } from '../types/product.type';

export const getAll = async (): Promise<Product[]> => {
  const { data: result } = await api.get(
    'https://api.escuelajs.co/api/v1/products'
  );
  return result;
};
