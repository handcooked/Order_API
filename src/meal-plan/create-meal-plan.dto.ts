/* eslint-disable prettier/prettier */
export class CreateMealPlanDto {
    userId: string;
    recipeId: string;
    personalizations: string[];
    days: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[];
    mealSlots: ('breakfast' | 'lunch' | 'dinner')[];
  }