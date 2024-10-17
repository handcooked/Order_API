/* eslint-disable prettier/prettier */
// recipe.interface.ts
// recipe.interface.ts
export interface Recipe {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  Recipe_name: string;
  Description: string;
  rating: string;
  type: string;
  Price: number;
  Ingredients: string[];
  Steps: string[];
  Serving_Size: number;
  personalizations: string[];
  Protein: number;
  Fat: number;
  Carbohydrates: number;
  Calories: number;
  Available: boolean;
  Key_Ingredients: string[];
  Allergens: string[];
  Discount: number;
}