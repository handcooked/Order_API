/* eslint-disable prettier/prettier */
import { Body, Controller, Post, HttpException, HttpStatus, Headers, Patch, Param } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './delivery.dto';
//import axios from 'axios';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post('add')
  async addDelivery(@Body() createDeliveryDto: CreateDeliveryDto, @Headers('orderID') orderID: string): Promise<any> {
    createDeliveryDto.orderID = orderID;
    //console.log(createDeliveryDto);
    //const deliveryAddress = await axios.get(`http://localhost:8000/auth/${customerID}/address`);
    try {
      return await this.deliveryService.create(createDeliveryDto);
    } catch (error) {
      throw new HttpException('Failed to add delivery', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id/status')
async updateDeliveryStatus(@Param('id') id: string, @Body('deliveryStatus') deliveryStatus: string): Promise<any> {
  try {
    return await this.deliveryService.updateStatus(id, deliveryStatus);
  } catch (error) {
    throw new HttpException('Failed to update delivery status', HttpStatus.BAD_REQUEST);
  }
}
}