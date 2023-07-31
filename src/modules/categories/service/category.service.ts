import { api } from 'src/boot/axios';
// Types
import { Category, CreateCategoryDTO } from '../types/category.type';

export const getAll = async (): Promise<Category[]> => {
  const { data: result } = await api.get(
    'https://api.escuelajs.co/api/v1/categories'
  );
  return result;
};

export const getById = async (id: number): Promise<Category> => {
  const { data: result } = await api.get(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  return result;
};

export const create = async (data: CreateCategoryDTO) => {
  const { data: result } = await api.post(
    'https://api.escuelajs.co/api/v1/categories/',
    data
  );
  return result;
};

export const updateById = async (id: number, data: Category) => {
  const { data: result } = await api.put(
    `https://api.escuelajs.co/api/v1/categories/${id}`,
    data
  );
  return result;
};

export const deleteById = async (id: number) => {
  const { data: result } = await api.delete(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  return result;
};
