import { reactive } from 'vue';
import { defineStore } from 'pinia';

//Services
import * as productService from '../service/product.service';

// Types
import { CreateProductDTO, Product } from '../types/product.type';

interface State {
  isLoading: boolean;
  product: Product | undefined;
  products: Product[];
}

export const useProductStore = defineStore('products', () => {
  const state = reactive<State>({
    isLoading: false,
    product: undefined,
    products: [],
  });

  // #region - Actions
  async function fetchAll() {
    try {
      state.isLoading = true;
      let results = state.products;

      if (!results?.length) {
        results = await productService.getAll();
        state.products = results;
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  async function fetchById(id: number) {
    try {
      state.isLoading = true;
      let result = state.product;
      if (!result) {
        result = await productService.getById(id);
        state.product = result;
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  async function create(data: CreateProductDTO) {
    try {
      state.isLoading = true;
      const result = await productService.create(data);
      state.products.push(result);
      state.product = result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  async function updateById(id: number, data: Product) {
    try {
      state.isLoading = true;
      const result = await productService.updateById(id, data);
      // Update store
      const index = state.products.findIndex((el) => el.id === id);
      state.products[index] = result;
      state.product = result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  async function deleteById(id: number) {
    try {
      state.isLoading = true;
      await productService.deleteById(id);
      state.products = state.products.filter((el: Product) => el.id !== id);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  // #endregion

  return {
    state,
    fetchAll,
    fetchById,
    create,
    updateById,
    deleteById,
  };
});
