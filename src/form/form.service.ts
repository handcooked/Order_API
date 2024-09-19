/* eslint-disable prettier/prettier */
// response.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateResponseDto } from './form.dto';

@Injectable()
export class ResponseService {
    private client: PrismaClient;


    constructor() {
      this.client = new PrismaClient();
    }

  async createResponses(createResponseDto: CreateResponseDto) {
    const { userId, responses } = createResponseDto;

    const createdResponses = await this.client.$transaction(
      responses.map(response =>
        this.client.response.create({
          data: {
            userId,
            questionId: response.questionId,
            answer: response.answer,
          },
        }),
      ),
    );

    return createdResponses;
  }
}