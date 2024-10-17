/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import AddAddressResult from 'src/types/addAddressResult';
import { Recipe } from './recipe.interface';
//import JWTHelper from 'src/utils/jwtHelper';
import CustomLogger from 'src/utils/logger';
//import * as ngeohash from 'ngeohash';

@Injectable()
export class RecipeService {
  private logger: CustomLogger;
  private client: PrismaClient;
  //private jwtHelper: JWTHelper;

  constructor() {
    this.logger = new CustomLogger();
    this.client = new PrismaClient();
    //this.jwtHelper = new JWTHelper();
  }


  async addRecipe(
    Recipe_name: string,
    Price: number,
    Serving_Size: number,
    Total_Calories: number,
    Available: boolean,
    Key_Ingredients: string[],
    Allergens: string[],
    Ingredients: string[],
    Description: string,
    image: string,
    rating: string,
    type: string,
    Steps: string[],
    personalizations: string[],
    Protein: number,
    Fat: number,
    Carbohydrates: number
  ): Promise<AddAddressResult> {
    try {
      //const decodedToken = await this.verifyToken(token);
      //const Hash = ngeohash.encode(Latitude, Longitude);


      const address = await this.client.recipe.create({
        data: {
          Recipe_name: Recipe_name,
          Price: Price,
          Serving_Size: Serving_Size,
          Calories: Total_Calories, // Updated to match the schema
          Available: Available,
          Key_Ingredients: Key_Ingredients,
          Allergens: Allergens,
          Ingredients: Ingredients,
          Description: Description,
          Discount: 0,
          image: image, // Added to match the schema
          rating: rating, // Added to match the schema
          type: type, // Added to match the schema
          Steps: Steps, // Added to match the schema
          personalizations: personalizations, // Added to match the schema
          Protein: Protein, // Added to match the schema
          Fat: Fat, // Added to match the schema
          Carbohydrates: Carbohydrates, // Added to match the schema
        },
      });
        return {
          id: address.id,
        };

    } catch (error) {
      this.logger.error(`Error adding address: ${error}`);
      //throw new CustomException(error.message, 500);
    }
  }
  async findAll(): Promise<Recipe[]> {
    return await this.client.recipe.findMany();
  }
  async getTopDiscountedRecipes(): Promise<Recipe[]> {
    // Assuming 'Recipe' is your entity and it has a 'discount' field
    // This query will fetch the top 10 recipes with the highest discounts
    return this.client.recipe.findMany({
      orderBy: {
        Discount: 'desc', // Order by discount in descending order
      },
      take: 10, // Limit the results to the top 10
    });
  }

}
