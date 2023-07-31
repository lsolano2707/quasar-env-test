import { computed } from 'vue';
import { useRouter } from 'vue-router';

// Store
import { useCategoryStore } from 'src/modules/categories/store/categoriesStore';

// Types
import { Category, CreateCategoryDTO } from '../types/category.type';

export const useCategories = () => {
  const router = useRouter();
  const categoriesStore = useCategoryStore();

  const isLoading = computed<boolean>(() => categoriesStore.state.isLoading);
  const category = computed<Category | undefined>(
    () => categoriesStore.state.category
  );
  const categories = computed<Category[]>(
    () => categoriesStore.state.categories
  );

  // #region - Functions

  function fetchCategories() {
    return categoriesStore.fetchAll();
  }

  function fetchCategoryById(id: number) {
    return categoriesStore.fetchById(id);
  }

  async function createCategory(data: CreateCategoryDTO) {
    if (!data) return;
    await categoriesStore.create(data);
  }

  async function updateProduct(id: number, data: Category) {
    await categoriesStore.updateById(id, data);
  }

  async function deleteProductById(id: number) {
    await categoriesStore.deleteById(id);
  }
  // #endregion

  // #region - Redirects
  function goToHomePage() {
    router.push({
      name: 'categories-home',
    });
  }

  function goToDetailPage(id: number) {
    router.push({
      name: 'categories-detail',
      params: { categoryId: id },
    });
  }

  function goToCreatePage() {
    router.push({
      name: 'categories-create',
    });
  }

  function goToEditPage(id: number) {
    router.push({
      name: 'categories-edit',
      params: { categoryId: id },
    });
  }
  // #endregion

  return {
    // Properties
    isLoading,
    category,
    categories,

    // Functions
    fetchCategories,
    fetchCategoryById,
    createCategory,
    updateProduct,
    deleteProductById,

    // Redirects
    goToHomePage,
    goToDetailPage,
    goToCreatePage,
    goToEditPage,
  };
};
