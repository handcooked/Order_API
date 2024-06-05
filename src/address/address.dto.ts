/* eslint-disable prettier/prettier */
import {
    //IsEmail,
    IsLatitude,
    IsLongitude,
    IsNotEmpty,
    //Length,
  } from 'class-validator';
  export class addressDto {
    @IsNotEmpty({ message: 'Street is required' })
    Street: string;

    @IsNotEmpty({ message: 'City is required' })
    City: string;

    @IsNotEmpty({ message: 'Pin-Code is required' })
    Pincode: string;

    @IsNotEmpty({ message: 'State is required' })
    State: string;

    @IsNotEmpty({ message: 'Country is required' })
    Country: string;

    @IsNotEmpty({ message: 'Latitude is required' })
    @IsLatitude({ message: 'Please enter a valid Latitude' })
    Latitude: string;

    @IsNotEmpty({ message: 'Longitude is required' })
    @IsLongitude({ message: 'Please enter a valid Longitude' })
    Longitude: string;
  }
