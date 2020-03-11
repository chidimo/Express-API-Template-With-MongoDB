import mongoose from 'mongoose';
import { createData } from './queryFunctions';

(async () => {
  await createData();
  mongoose.connection.close();
})();
