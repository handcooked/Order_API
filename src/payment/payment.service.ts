/* eslint-disable prettier/prettier */
// card.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//import { PrismaService } from '../prisma/prisma.service';
import { CreateCardDto } from './Payment.dto';

@Injectable()
export class PaymentService {
    private client: PrismaClient;


    constructor() {
      this.client = new PrismaClient();
    }

  async addCard(createCardDto: CreateCardDto): Promise<void> {
    const card = await this.client.card.create({
      data: {
        CardNumber: createCardDto.cardNumber,
        ValidThroughMonth: createCardDto.validThroughMonth,
        ValidThroughYear: createCardDto.validThroughYear,
        CVV: createCardDto.cvv,
        CardHolderName: createCardDto.cardHolderName,
      },
    });

    await this.client.paymentOptions.update({
      where: { id: createCardDto.paymentOptionId },
      data: {
        Credit_cards: {
          push: card.id, // Assuming Prisma Client and your database support array push operation
        },
      },
    });
  }
}
