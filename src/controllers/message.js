import { Messages } from '../models/models';

export const messagesPage = async (req, res, next) => {
  try {
    const messages = await Messages.find();
    res.status(200).json({ messages });
  } catch (err) {
    next(err);
  }
};

export const addMessage = async (req, res, next) => {
  const { name, message } = req.body;
  try {
    const m = await Messages({ name, message }).save();
    res.status(201).json({ success: true, message: m });
  } catch (err) {
    next(err);
  }
};
