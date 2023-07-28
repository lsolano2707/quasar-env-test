import { computed } from 'vue';
import { useRouter } from 'vue-router';

// Store
import { useProductStore } from '../store/product.store';

// Types
import { CreateProductDTO, Product } from '../types/product.type';

export const useProduct = () => {
  const router = useRouter();
  const productStore = useProductStore();

  const isLoading = computed<boolean>(() => productStore.state.isLoading);
  const product = computed<Product | undefined>(
    () => productStore.state.product
  );
  const products = computed<Product[]>(() => productStore.state.products);

  // #region - Functions
  function fetchProductById(id: number) {
    return productStore.fetchById(id);
  }

  function fetchProducts() {
    return productStore.fetchAll();
  }

  async function createProduct(data: CreateProductDTO) {
    if (!data) return;
    await productStore.create(data);
  }

  async function updateProduct(id: number, data: Product) {
    await productStore.updateById(id, data);
  }

  async function deleteProductById(id: number) {
    await productStore.deleteById(id);
  }
  // #endregion

  // #region - Redirects
  function goToHomePage() {
    router.push({
      name: 'products-home',
    });
  }

  function goToDetailPage(id: string) {
    router.push({
      name: 'products-detail',
      params: { albumId: id },
    });
  }

  function goToCreatePage() {
    router.push({
      name: 'products-create',
    });
  }

  function goToEditPage(id: string) {
    router.push({
      name: 'products-edit',
      params: { albumId: id },
    });
  }
  // #endregion

  return {
    // Properties
    isLoading,
    product,
    products,

    // Functions
    fetchProductById,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProductById,

    // Redirects
    goToHomePage,
    goToDetailPage,
    goToCreatePage,
    goToEditPage,
  };
};
