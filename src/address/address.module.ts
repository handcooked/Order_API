import { Module, RequestMethod } from '@nestjs/common';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressMiddleware } from './address.middleware';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AddressMiddleware)
      .forRoutes({ path: 'addAddress', method: RequestMethod.POST });
  }
}
