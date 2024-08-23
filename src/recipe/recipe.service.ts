/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import AddAddressResult from 'src/types/addAddressResult';
//import AddAddressResult from 'src/types/addAddressResult';
//import CustomException from 'src/types/exception';
//import UpdateAddressResult from 'src/types/updateAddressResult';
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
  ): Promise<AddAddressResult> {
    try {
      //const decodedToken = await this.verifyToken(token);
      //const Hash = ngeohash.encode(Latitude, Longitude);


        const address = await this.client.recipe.create({
          data: {
            Recipe_name: Recipe_name,
            Price: Price,
            Serving_Size: Serving_Size,
            Total_Calories: Total_Calories,
            Available: Available,
            Key_Ingredients: Key_Ingredients,
            Allergens: Allergens,
            Ingredients: Ingredients,
            Description: Description,
            Discount: 0,
            //userID: '08790e48-65e9-463f-bfce-30a044087d9c',
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
  // async getTopDiscountedRecipes(): Promise<Recipe[]> {
  //   // Assuming 'Recipe' is your entity and it has a 'discount' field
  //   // This query will fetch the top 10 recipes with the highest discounts
  //   return this.client.recipe.findMany({
  //     orderBy: {
  //       discount: 'DESC', // Order by discount in descending order
  //     },
  //     take: 10, // Limit the results to the top 10
  //   });
  // }

}
