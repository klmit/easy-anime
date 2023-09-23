import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

console.log(process.env.MONGO_URL);

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class DataBaseModule {}
