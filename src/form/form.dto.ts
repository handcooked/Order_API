/* eslint-disable prettier/prettier */
// create-response.dto.ts
export class CreateResponseDto {
    userId: string;
    responses: {
      questionId: number;
      answer: string;
    }[];
}


