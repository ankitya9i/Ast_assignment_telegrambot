/* eslint-disable prettier/prettier */
import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const databaseProviders: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION', // This token will be used for dependency injection
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const uri = 'mongodb+srv://aktyagi18052002:5rzSG62a4L131Tf8@cluster0.zdr0pfe.mongodb.net/';

        // Connect to the MongoDB database using Mongoose
        const connection = await mongoose.connect(uri);

        return connection;
      } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
      }
    },
  },
];

