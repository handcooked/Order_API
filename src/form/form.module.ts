// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Module, Res } from '@nestjs/common';
import { FormController } from './form.controller';
import { ResponseService } from './form.service';

@Module({
  controllers: [FormController],
  providers: [ResponseService],
})
export class FormModule {}
