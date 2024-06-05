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
          Description
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
          Description
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
    async getRecipe(
      @Req() request: Request,
      @Res() response: Response,
    ): Promise<void> {
      try {

        const {
          Recipe_name,
          Price,
          Serving_Size,
          Total_Calories,
          Available,
          Key_Ingredients,
          Allergens,
          Ingredients,
          Description
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
          Description
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



  }
