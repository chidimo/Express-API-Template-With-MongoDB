import { Messages } from '../models/models';

const home = {
  indexPage: (req, res) => res.status(200).json({ message: 'Index page' }),
  aboutPage: (req, res) => res.status(200).json({ message: 'About page' }),
  messagesPage: async (req, res) => {
    try {
      const messages = await Messages.find();
      res.status(200).json({ messages });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  addMessage: async (req, res) => {
    const { name, message } = req.body;
    const m = Messages({ name, message });
    try {
      await m.save();
      res.status(201).json({ message: 'Saved successfully!' });
    } catch (err) {
      res.status(400).json({ message: 'Saving failed!' });
    }
  },
};

export default home;
