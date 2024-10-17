/* eslint-disable prettier/prettier */
import {
    Controller,
    HttpStatus,
    Post,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
    Headers,
    Get,
  } from '@nestjs/common';
  import { RecipeService } from './recipe.service';
  import { Request, Response } from 'express';


  @Controller('recipe')
  export class RecipeController {
    private readonly recipeService: RecipeService;

    constructor() {
      this.recipeService = new RecipeService();
    }

    @Post('add')
    @UsePipes(ValidationPipe)
    async addRecipe(
      @Headers('id') token: string,
      @Req() request: Request,
      @Res() response: Response,
    ): Promise<void> {
      try {
        console.log(token);
        const {
          Recipe_name,
          Price,
          Serving_Size,
          Total_Calories,
          Available,
          Key_Ingredients,
          Allergens,
          Ingredients,
          Description,
          image,
          rating,
          type,
          Steps,
          personalizations,
          Protein,
          Fat,
          Carbohydrates
        } = request.body;

        const { id } = await this.recipeService.addRecipe(
          Recipe_name,
          Price,
          Serving_Size,
          Total_Calories,
          Available,
          Key_Ingredients,
          Allergens,
          Ingredients,
          Description,
          image,
          rating,
          type,
          Steps,
          personalizations,
          Protein,
          Fat,
          Carbohydrates
        );
        response.status(HttpStatus.CREATED).json({
          message: 'Recipe added successfully',
          id,
        });
      } catch (e) {
        //this.logger.error(e);
        response.status(e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: e.message || 'Internal Server Error',
        });
      }
    }
    @Get('all')
    @UsePipes(ValidationPipe)
    async getRecipe(@Req() request: Request, @Res() response: Response): Promise<void> {
      try {
        const recipes = await this.recipeService.findAll();
        response.status(200).json(recipes);
      } catch (e) {
        response.status(500).json({
          message: e.message || 'Internal Server Error',
        });
      }
    }
    @Get('top-discounted')
    async getTopDiscountedRecipes(@Res() response: Response): Promise<void> {
    try {
      const topRecipes = await this.recipeService.getTopDiscountedRecipes();
      response.status(HttpStatus.OK).json(topRecipes);
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }



  }
