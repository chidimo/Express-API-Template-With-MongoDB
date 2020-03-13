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
    const m = Messages({ name, message });
    try {
      await m.save();
      res.status(201).json({ message: 'Saved successfully!' });
    } catch (err) {
      next(err);
    }
  },
};

export default home;
