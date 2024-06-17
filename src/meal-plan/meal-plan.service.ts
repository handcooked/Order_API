/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMealPlanDto } from './create-meal-plan.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MealPlanService {

  private client: PrismaClient;


  constructor() {
    this.client = new PrismaClient();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(createMealPlanDto: CreateMealPlanDto,recipeID: string) {
    const { userId, days,recipeId,mealSlots } = createMealPlanDto;
    console.log('Updating meal plan for user', userId);

    const mealPlan = await this.client.mealPlan.findUnique({
      where: { userId },
    });

    if (!mealPlan) {
      throw new Error('Meal plan not found');
    }

    for (const day of days) {
      for (const mealSlot of mealSlots) {
        if (!mealPlan[day]) {
          mealPlan[day] = {};
        }
        if (!mealPlan[day][mealSlot]) {
          mealPlan[day][mealSlot] = [];
        }
        mealPlan[day][mealSlot].push(recipeId);
      }
    }

    return this.client.mealPlan.update({
      where: { userId },
      data: mealPlan,
    });
  }

  async create(createMealPlanDto: CreateMealPlanDto) {
    const { userId, days, recipeId,mealSlots } = createMealPlanDto;
    console.log('Creating meal plan for user', userId);

    let mealPlan = await this.client.mealPlan.findUnique({
      where: { userId },
    });

    if (!mealPlan) {
      console.log('Creating new meal plan');
      mealPlan = await this.client.mealPlan.create({
        data: {
          userId,
          // Initialize the meal plan with empty arrays for each day and meal slot
          monday: { breakfast: [], lunch: [], dinner: [] },
          tuesday: { breakfast: [], lunch: [], dinner: [] },
          wednesday: { breakfast: [], lunch: [], dinner: [] },
          thursday: { breakfast: [], lunch: [], dinner: [] },
          friday: { breakfast: [], lunch: [], dinner: [] },
          saturday: { breakfast: [], lunch: [], dinner: [] },
          sunday: { breakfast: [], lunch: [], dinner: [] },
        },
      });
    }

    for (const day of days) {
      for (const mealSlot of mealSlots) {
        if (!mealPlan[day]) {
          mealPlan[day] = {};
        }
        if (!mealPlan[day][mealSlot]) {
          mealPlan[day][mealSlot] = [];
        }
        mealPlan[day][mealSlot].push(recipeId);
      }
    }

    return this.client.mealPlan.update({
      where: { userId },
      data: mealPlan,
    });
  }
}
