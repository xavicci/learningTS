import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
    categoryId: string;
};


export type example = Pick<Product, 'color' | 'description'> 