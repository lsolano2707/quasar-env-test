import { api } from 'src/boot/axios';
// Types
import { CreateProductDTO, Product } from '../types/product.type';

export const getAll = async (): Promise<Product[]> => {
  const { data: result } = await api.get(
    'https://api.escuelajs.co/api/v1/products'
  );
  return result;
};

export const getById = async (id: number): Promise<Product> => {
  const { data: result } = await api.get(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  return result;
};

export const create = async (data: CreateProductDTO) => {
  const { data: result } = await api.post(
    'https://api.escuelajs.co/api/v1/products/',
    data
  );
  return result;
};

export const updateById = async (id: number, data: Product) => {
  const { data: result } = await api.put(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    data
  );
  return result;
};

export const deleteById = async (id: number) => {
  const { data: result } = await api.delete(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  return result;
};
