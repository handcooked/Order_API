/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DeliveryStatus, PrismaClient } from '@prisma/client';
import { CreateDeliveryDto } from './delivery.dto';

@Injectable()
export class DeliveryService {
    private client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    async create(createDeliveryDto: CreateDeliveryDto) {
        try {
            // Save the delivery information in the database
            const result = await this.client.delivery.create({ data: createDeliveryDto });
            console.log(result);
            // return result;
          } catch (error) {
            throw new Error('Failed to save delivery information in the database');
          }
    }

    async updateStatus(id: string, deliveryStatus: string) {
    try {
        // Update the delivery status in the database
        const result = await this.client.delivery.update({
          where: { id },
          data: { deliveryStatus: deliveryStatus as DeliveryStatus },
        });
        return result;
      } catch (error) {
        throw new Error('Failed to update delivery status in the database');
      }
}

}
