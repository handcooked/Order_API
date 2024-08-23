/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { OrderService } from './order.service';
import { Order } from './schemas/order/order';
//import { firstValueFrom } from 'rxjs';
import axios from 'axios';

@Controller('orders')
export class OrderController {
  [x: string]: any;
  constructor(
    private readonly orderService: OrderService,
    private readonly httpService: HttpService
) {}

@Post()
async addOrder(@Body() createOrderDto: Partial<Order>, @Headers('user-id') customerID: string) {
  try {
    console.log(customerID);
    const userAddressResponse = await axios.get(`http://localhost:8000/auth/${customerID}/address`);
//console.log("Hey");
    console.log(userAddressResponse.data.Geohash);
    const userAddress = userAddressResponse.data;
    const storeID = await this.orderService.getStoreID(userAddress.Geohash);
    createOrderDto.customerID = customerID;
    createOrderDto.storeID = storeID;
    this.orderService.validateDelSlot(createOrderDto.delType, createOrderDto.delSlot);
    const createdOrder = await this.orderService.create(createOrderDto);
    return createdOrder;
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}


  // async getAddress(customerID: string): Promise<string> {
  //   const response$ = await this.httpService.get(`http://user-service-url/users/${customerID}`);
  //   const response = await firstValueFrom(response$);
  //  return response.data.address;
  // }
}
