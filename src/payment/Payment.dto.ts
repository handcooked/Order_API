/* eslint-disable prettier/prettier */
// dto/create-card.dto.ts
export class CreateCardDto {
    readonly cardNumber: number;
    readonly validThroughMonth: number;
    readonly validThroughYear: number;
    readonly cvv: number;
    readonly cardHolderName: string;
    readonly paymentOptionId: string; // Assuming you pass the ID of the PaymentOptions to link the card to
  }