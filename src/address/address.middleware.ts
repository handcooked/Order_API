/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';


@Injectable()

export class AddressMiddleware implements NestMiddleware {
  private client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
  async checkGeohashServiceability(Geohash: string): Promise<boolean> {
    const service = await this.client.service.findMany({
      where: { Geohash: Geohash },
    });
    return !!service;
  }
  use(req: Request, res: Response, next: NextFunction) {
    const Geohash = req.body.geohash;


    const isServiceable = this.checkGeohashServiceability(Geohash);

    if (isServiceable) {
      next();
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'Address is not serviceable.' });
    }
  }
}