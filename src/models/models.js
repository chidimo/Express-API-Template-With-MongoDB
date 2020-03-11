import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

export const Messages = model('messages', messageSchema);
