/* eslint-disable prettier/prettier */
// card.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreateCardDto } from './Payment.dto';

@Controller('cards')
export class PaymentController {
  constructor(private readonly cardService: PaymentService) {}

  @Post()
  async addCard(@Body() createCardDto: CreateCardDto): Promise<void> {
    await this.cardService.addCard(createCardDto);
  }
}