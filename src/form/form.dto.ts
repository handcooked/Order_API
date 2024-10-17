/* eslint-disable prettier/prettier */
import { IsString, IsArray, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class ResponseDto {
  @IsInt()
  questionId: number;

  @IsString()
  answer: string;
}

export class CreateResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResponseDto)
  responses: ResponseDto[];
}