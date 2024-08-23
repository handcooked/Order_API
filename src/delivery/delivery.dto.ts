/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDeliveryDto {
  @IsString()
  @IsNotEmpty()
  orderID: string;

  @IsString()
  @IsNotEmpty()
  readonly deliveryAddress: string;



}
