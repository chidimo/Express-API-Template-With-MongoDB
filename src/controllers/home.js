import { Messages } from '../models/models';

const home = {
  indexPage: (req, res) => res.status(200).json({ message: 'Index page' }),
  aboutPage: (req, res) => res.status(200).json({ message: 'About page' }),
  messagesPage: async (req, res, next) => {
    try {
      const messages = await Messages.find();
      res.status(200).json({ messages });
    } catch (err) {
      next(err);
    }
  },
  addMessage: async (req, res, next) => {
    const { name, message } = req.body;
    try {
      const m = await Messages({ name, message }).save();
      res.status(200).json({ success: true, message: m });
    } catch (err) {
      next(err);
    }
  },
};

export default home;
