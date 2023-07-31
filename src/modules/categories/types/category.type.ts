export interface Category {
  id: number;
  name: string;
  image: string;
}
//Customizar: (cuando necesito alguna propiedad especifica del objeto).
export interface CreateCategoryDTO
  extends Required<Pick<Category, 'id' | 'name' | 'image'>> {
  categoryName: string;
  categoryImage: string[];
}
export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;
