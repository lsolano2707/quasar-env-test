import { reactive } from 'vue';
import { defineStore } from 'pinia';

//Services
import * as categoryService from '../service/category.service';

// Types
import { Category, CreateCategoryDTO } from '../types/category.type';

interface State {
  isLoading: boolean;
  category: Category | undefined;
  categories: Category[];
}

export const useCategoryStore = defineStore('categories', () => {
  const state = reactive<State>({
    isLoading: false,
    category: undefined,
    categories: [],
  });

  // #region - Actions
  async function fetchAll() {
    try {
      state.isLoading = true;
      let results = state.categories;

      if (!results?.length) {
        results = await categoryService.getAll();
        state.categories = results;
      }
      return results;
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
      let result = state.category;
      if (!result) {
        result = await categoryService.getById(id);
        state.category = result;
      }
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  async function create(data: CreateCategoryDTO) {
    try {
      state.isLoading = true;
      const result = await categoryService.create(data);
      state.categories.push(result);
      state.category = result;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  async function updateById(id: number, data: Category) {
    try {
      state.isLoading = true;
      const result = await categoryService.updateById(id, data);
      // Update store
      const index = state.categories.findIndex((el) => el.id === id);
      state.categories[index] = result;
      state.category = result;
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
      await categoryService.deleteById(id);
      state.categories = state.categories.filter(
        (el: Category) => el.id !== id
      );
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      state.isLoading = false;
    }
  }

  return {
    state,
    create,
    fetchAll,
    fetchById,
    updateById,
    deleteById,
  };
});
