/* eslint-disable prettier/prettier */
// response.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateResponseDto } from './form.dto';
import axios from 'axios';

@Injectable()
export class ResponseService {
    private client: PrismaClient;


    constructor() {
      this.client = new PrismaClient();
    }

  async createResponses(createResponseDto: CreateResponseDto,token: string) {

    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }


    let userId: string;
    try {
      const response = await axios.get(`http://localhost:8000/auth/helper/${token}`);
      console.log("API Response:", response.data);

      // Assuming the response contains a field named 'userId'
      userId = response.data;
      if (!userId) {
        throw new Error('userId not found in response');
      }
    } catch (error) {
      console.error("Error fetching userId:", error);
      throw new UnauthorizedException('Invalid token');
    }
    

    let user = await this.client.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      user = await this.client.user.create({
        data: { id: userId },
      });
    }
    const { responses } = createResponseDto;




    if (!Array.isArray(responses)) {
      throw new Error('Invalid responses array');
    }

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