/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL,
};

export default config;
