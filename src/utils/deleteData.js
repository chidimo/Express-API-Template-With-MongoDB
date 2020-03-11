import mongoose from 'mongoose';
import { deleteData } from './queryFunctions';

(async () => {
  await deleteData();
  mongoose.connection.close();
})();
