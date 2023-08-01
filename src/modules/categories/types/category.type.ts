export interface Category {
  id: number;
  name: string;
  image: string;
}
//Customizar: (cuando necesito alguna propiedad especifica del objeto).
export type CreateCategoryDTO = Required<Pick<Category, 'name' | 'image'>>;
export type UpdateCategoryDTO = Partial<CreateCategoryDTO>;
