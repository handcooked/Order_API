/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order/order';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://soumikhandcooked:qXXMoP8QdudAWh2p@order.dlwjndi.mongodb.net/?retryWrites=true&w=majority&appName=Order'),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    HttpModule,
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
