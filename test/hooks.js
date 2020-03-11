import mongoose from 'mongoose';
import { createData, deleteData } from '../src/utils/queryFunctions';

before(async () => {
  await createData();
});

after(async () => {
  await deleteData();
  mongoose.connection.close();
});
