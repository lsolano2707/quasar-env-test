import { computed } from 'vue';

// Store
import { useProductStore } from '../store/product.store';
import { Product } from '../types/product.type';

export const useProduct = () => {
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

  async function createProduct(data: Product) {
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
  };
};
