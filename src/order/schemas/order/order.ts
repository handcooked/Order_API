/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop()
  storeID: string;

  @Prop()
  customerID: string;

  @Prop()
  isCompleted: boolean;

  @Prop({ enum: ['alacarte', 'weekly'] })
  delType: string;

  @Prop({type: Object})
  delSlot: {
    date?: Date;
    time?: string;
    weekday?: string;
    slot?: string;
    duration?: number;
  };

  @Prop()
  riderID: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);