/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param } from '@nestjs/common';
import { CreateMealPlanDto } from './create-meal-plan.dto';
import { MealPlanService } from './meal-plan.service';

@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Post(':recipeId')
  update(@Body() createMealPlanDto: CreateMealPlanDto, @Param('recipeId') recipeId: string) {
    return this.mealPlanService.update(createMealPlanDto, recipeId);
  }

  @Post('create')
  create(@Body() createMealPlanDto: CreateMealPlanDto) {
    return this.mealPlanService.create(createMealPlanDto);
  }
}