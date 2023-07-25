// Services
import * as productService from '../service/product.service';

export const useHotel = () => {
  async function getAll() {
    return productService.getAll();
  }

  return {
    getAll,
  };
};
