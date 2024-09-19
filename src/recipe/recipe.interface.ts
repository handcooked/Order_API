/* eslint-disable prettier/prettier */
// recipe.interface.ts
export interface Recipe {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    Recipe_name: string;
    Price: number;
    Serving_Size: number;
    personalizations: string[];
    Total_Calories: number;
    Available: boolean;
    Key_Ingredients: string[];
    Allergens: string[];
    Ingredients: string[];
    Description: string;
    Discount: number;
  }