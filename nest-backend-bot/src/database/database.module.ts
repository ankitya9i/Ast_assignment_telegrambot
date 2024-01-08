/* eslint-disable prettier/prettier */
// database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.provider';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://aktyagi18052002:5rzSG62a4L131Tf8@cluster0.zdr0pfe.mongodb.net/')],
  providers: [...databaseProviders],
  exports: [MongooseModule],
   // Export MongooseModule for use in other modules
})

export class DatabaseModule {}
