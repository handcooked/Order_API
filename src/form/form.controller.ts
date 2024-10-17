/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Headers, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateResponseDto } from './form.dto';
import { ResponseService } from './form.service';

@Controller('form')
export class FormController {
    constructor(private readonly responseService: ResponseService) {}
    private videos = [
        {
          id: 1,
          Question: "Please mention your height.",
        },
        {
          id: 2,
          Question: "Please mention your weight.",
        },
        {
          id: 3,
          Question:"Any Medical History?",
        },
        {
          id: 4,
          Question:"Any Allergies?",
        },
        {
          id: 5,
          Question:"Any Medication?",
        },
        {
          id: 6,
          Question:"Any Injuries?",
        },
      ];

      @Get('all')
      getQuestions() {
        return this.videos;
      }

      @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createResponses(@Body() createResponseDto: CreateResponseDto, @Headers('authorization') authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }
    

    const token = authHeader;

    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    console.log(createResponseDto);
    return await this.responseService.createResponses(createResponseDto, token);
  }


}
