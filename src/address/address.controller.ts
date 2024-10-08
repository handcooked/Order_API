/* eslint-disable prettier/prettier */
import {
    Controller,
    HttpStatus,
    Post,
    //Get,
    Req,
    Res,
    Put,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    Headers,
    //Body,
    Query,
    Body,
  } from '@nestjs/common';
  import CustomLogger from 'src/utils/logger';
  import { AddressService } from './address.service';
  import { Request, Response } from 'express';
//import { addressDto } from './address.dto';
import { PrismaClient } from '@prisma/client';
  //import { addressDto } from 'src/auth/dto/address.dto';

  @Controller('address')
  export class AddressController {
    private readonly logger: CustomLogger;
    private readonly addressService: AddressService;
    private client: PrismaClient;

    constructor() {
      this.logger = new CustomLogger();
      this.addressService = new AddressService();
      this.client = new PrismaClient();
    }

    @Post('check-address')
  async checkAddress(@Body('Geohash') Geohash: string): Promise<boolean> {
    console.log(Geohash);
    const service = await this.client.service.findFirst({
      where: { Geohash: Geohash },
    });
    console.log(service);
    return !!service;
  }

    @Post('addService')
    @UsePipes(ValidationPipe)
    async addService(
      @Headers('id') token: string,
      //@Body() addressDTO: addressDto,
      @Req() request: Request,
      @Res() response: Response,
    ): Promise<void> {
      try {
        console.log(token);
        const {
          City,
          Latitude,
          Longitude,
        } = request.body;
        const { id } = await this.addressService.addService(
          token,
          City,
          Latitude,
          Longitude,
        );
        response.status(HttpStatus.CREATED).json({
          message: 'Address added successfully',
          id,
        });
      } catch (e) {
        this.logger.error(e);
        response.status(e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: e.message || 'Internal Server Error',
        });
      }
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    async updateAddress(
      @Headers('tokens') token: string,
      //@Body() addressDTO: addressDto,
      @Param('id') id: string,
      @Req() request: Request,
      @Res() response: Response,
    ): Promise<void> {
      try {
        const {
          FlatNumber,
          Street,
          City,
          Pincode,
          State,
          Country,
          Latitude,
          Longitude,
        } = request.body;
        const {} = await this.addressService.updateAddress(
          token,
          id,
          FlatNumber,
          Street,
          City,
          Pincode,
          State,
          Country,
          Latitude,
          Longitude,
        );
        response.status(HttpStatus.CREATED).json({
          message: 'Address updated successfully',
        });
      } catch (e) {
        this.logger.error(e);
        response.status(e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: e.message || 'Internal Server Error',
        });
      }
    }
    @Delete(':id')
    @UsePipes(ValidationPipe)
    async deleteAddress(
      @Headers('Authorization') token: string,
      @Param('id') id: string,
      @Res() response: Response,
    ): Promise<void> {
      console.log(id);
      try {
        const {} = await this.addressService.deleteAddress(id);
        response.status(HttpStatus.CREATED).json({
          message: 'Address deleted successfully',
          id,
        });
      } catch (e) {
        this.logger.error(e);
        response.status(e.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: e.message || id,
        });
      }
    }
  }
