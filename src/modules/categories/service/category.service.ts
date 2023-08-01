import { api } from 'src/boot/axios';

// Constants
import {
  API_URL_BASE,
  CATEGORIES_API,
} from 'src/modules/common/constants/env.constant';

// Types
import {
  Category,
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from '../types/category.type';

export const getAll = async (): Promise<Category[]> => {
  const { data: result } = await api.get(`${API_URL_BASE}/${CATEGORIES_API}`);
  return result;
};

export const getById = async (id: number): Promise<Category> => {
  const { data: result } = await api.get(
    `${API_URL_BASE}/${CATEGORIES_API}/${id}`
  );
  return result;
};

export const create = async (data: CreateCategoryDTO) => {
  const { data: result } = await api.post(
    `${API_URL_BASE}/${CATEGORIES_API}`,
    data
  );
  return result;
};

export const updateById = async (id: number, data: UpdateCategoryDTO) => {
  const { data: result } = await api.put(
    `${API_URL_BASE}/${CATEGORIES_API}/${id}`,
    data
  );
  return result;
};

export const deleteById = async (id: number) => {
  const { data: result } = await api.delete(
    `${API_URL_BASE}/${CATEGORIES_API}/${id}`
  );
  return result;
};
