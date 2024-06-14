/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class MealPlanService {}



  async create(createMealPlanDto: CreateMealPlanDto) {
    const { userId, days, recipe } = createMealPlanDto;

    const mealPlan = await this.prisma.mealPlan.findUnique({
      where: { userId },
    });

    if (!mealPlan) {
      throw new Error('Meal plan not found');
    }

    for (const day of days) {
      mealPlan[day] = [...mealPlan[day], recipe];
    }

    return this.prisma.mealPlan.update({
      where: { userId },
      data: mealPlan,
    });
  }