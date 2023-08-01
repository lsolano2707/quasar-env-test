import { api } from 'src/boot/axios';

// Constants
import {
  API_URL_BASE,
  PRODUCTS_API,
} from 'src/modules/common/constants/env.constant';

// Types
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '../types/product.type';

export const getAll = async (): Promise<Product[]> => {
  const { data: result } = await api.get(`${API_URL_BASE}/${PRODUCTS_API}`);
  return result;
};

export const getById = async (id: number): Promise<Product> => {
  const { data: result } = await api.get(
    `${API_URL_BASE}/${PRODUCTS_API}/${id}`
  );
  return result;
};

export const create = async (data: CreateProductDTO) => {
  const { data: result } = await api.post(
    `${API_URL_BASE}/${PRODUCTS_API}`,
    data
  );
  return result;
};

export const updateById = async (id: number, data: UpdateProductDTO) => {
  const { data: result } = await api.put(
    `${API_URL_BASE}/${PRODUCTS_API}/${id}`,
    data
  );
  return result;
};

export const deleteById = async (id: number) => {
  const { data: result } = await api.delete(
    `${API_URL_BASE}/${PRODUCTS_API}/${id}`
  );
  return result;
};
