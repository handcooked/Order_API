/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order} from './schemas/order/order';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OrderService {
  private client: PrismaClient;
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {
    this.client = new PrismaClient();
  }

  async getStoreID(geohash: string): Promise<string> {
    const servicableAddresses = await this.client.service.findMany({
      where: { Geohash: geohash },
    });
    if (servicableAddresses.length === 0) {
      throw new NotFoundException('No servicable address found for this geohash');
    }
    return servicableAddresses[0].id; // Return the ID of the first servicable address
  }

  async create(createOrderDto: Partial<Order>): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  validateDelSlot(delType: string, delSlot: any) {
    if (delType === 'alacarte') {
      if (!delSlot.date || !delSlot.time || delSlot.weekday || delSlot.slot || delSlot.duration) {
        throw new BadRequestException('Invalid delSlot for alacarte delType');
      }
    } else if (delType === 'weekly') {
      if (delSlot.date || delSlot.time || !delSlot.weekday || !delSlot.slot || !delSlot.duration) {
        throw new BadRequestException('Invalid delSlot for weekly delType');
      }
    } else {
      throw new BadRequestException('Invalid delType');
    }
  }

}
