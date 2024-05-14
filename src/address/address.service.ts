/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import AddAddressResult from 'src/types/addAddressResult';
import CustomException from 'src/types/exception';
import UpdateAddressResult from 'src/types/updateAddressResult';
//import JWTHelper from 'src/utils/jwtHelper';
import CustomLogger from 'src/utils/logger';
import * as ngeohash from 'ngeohash';

@Injectable()
export class AddressService {
  private logger: CustomLogger;
  private client: PrismaClient;
  //private jwtHelper: JWTHelper;

  constructor() {
    this.logger = new CustomLogger();
    this.client = new PrismaClient();
    //this.jwtHelper = new JWTHelper();
  }



  async addAddress(
    token: string,
    FlatNumber: string,
    Street: string,
    City: string,
    Pincode: string,
    State: string,
    Country: string,
    Latitude: string,
    Longitude: string,
  ): Promise<AddAddressResult> {
    try {
      //const decodedToken = await this.verifyToken(token);
      const Hash = ngeohash.encode(Latitude, Longitude);

      if (true) {
        const address = await this.client.address.create({
          data: {
            FlatNumber: FlatNumber,
            Street: Street,
            City: City,
            Pincode: Pincode,
            State: State,
            Country: Country,
            latitude: Latitude,
            longitude: Longitude,
            Geohash: Hash,
            //userID: '08790e48-65e9-463f-bfce-30a044087d9c',
          },
        });
        return {
          id: address.id,
        };
      }
    } catch (error) {
      this.logger.error(`Error adding address: ${error}`);
      throw new CustomException(error.message, 500);
    }
  }
  async addService(
    token: string,
    City: string,
    Latitude: string,
    Longitude: string,
  ): Promise<AddAddressResult> {
    try {
      //const decodedToken = await this.verifyToken(token);
      const Hash = ngeohash.encode(Latitude, Longitude);

      if (true) {
        const address = await this.client.service.create({
          data: {
            Location: City,
            latitude: Latitude,
            longitude: Longitude,
            Geohash: Hash,
            //userID: '08790e48-65e9-463f-bfce-30a044087d9c',
          },
        });
        return {
          id: address.id,
        };
      }
    } catch (error) {
      this.logger.error(`Error adding address: ${error}`);
      throw new CustomException(error.message, 500);
    }
  }
  async updateAddress(
    token: string,
    id: string,
    FlatNumber: string,
    Street: string,
    City: string,
    Pincode: string,
    State: string,
    Country: string,
    Latitude: string,
    Longitude: string,
  ): Promise<UpdateAddressResult> {
    try {
      //const decodedToken = await this.verifyToken(token);

      const Hash = ngeohash.encode(Latitude, Longitude);

      if (true) {
        await this.client.address.updateMany({
          where: { id: id },
          data: {
            FlatNumber: FlatNumber,
            Street: Street,
            City: City,
            Pincode: Pincode,
            State: State,
            Country: Country,
            latitude: Latitude,
            longitude: Longitude,
            Geohash: Hash,
            //userID: decodedToken,
          },
        });

        return {
          id: id,
        };
      }
    } catch (error) {
      this.logger.error(`Error updating address: ${error}`);
      throw new CustomException(error.message, 500);
    }
  }
  async deleteAddress(id: string): Promise<boolean> {
    try {
      const decodedToken = true;
      if (decodedToken) {
        await this.client.address.deleteMany({
          where: { id: id },
        });

        return true;
      }
    } catch (error) {
      this.logger.error(`Error deleting address: ${error}`);
      throw new CustomException(error.message, 500);
    }
  }
}
