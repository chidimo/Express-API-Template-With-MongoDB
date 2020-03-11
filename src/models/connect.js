/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { connectionString } from '../settings';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected');
  } catch (err) {
    console.error(`Error ${err.message}`);
  }
})();
