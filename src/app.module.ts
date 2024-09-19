/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { CsvService } from './csv/csv.service';
//import { CsvController } from './csv/csv.controller';
import { RecipeModule } from './recipe/recipe.module';
import { AddressModule } from './address/address.module';
import { OrderModule } from './order/order.module';
import { MealPlanModule } from './meal-plan/meal-plan.module';
import { PaymentModule } from './payment/payment.module';
import { DeliveryModule } from './delivery/delivery.module';
import { VideoModule } from './video/video.module';
import { FormModule } from './form/form.module';

@Module({
  imports: [RecipeModule, AddressModule, OrderModule, MealPlanModule, PaymentModule, DeliveryModule, VideoModule, FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
