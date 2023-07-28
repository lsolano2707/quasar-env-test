import { Category } from '../types/category.type';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

//Customizar: (cuando necesito alguna propiedad especifica del objeto).
export interface CreateProductDTO
  extends Required<
    Pick<Product, 'title' | 'price' | 'description' | 'images'>
  > {
  categoryId: number;
}
export type UpdateProductDTO = Partial<CreateProductDTO>;
