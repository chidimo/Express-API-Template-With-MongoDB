import debug from 'debug';
import '../models/connect';

import { Messages } from '../models/models';

const logger = debug('dev');

const data = [
  { name: 'orji', message: 'second message' },
  { name: 'chidimo', message: 'first message' },
];

export const createData = async () => new Promise(resolve => {
  const stop = data.length;

  data.forEach(async (d, index) => {
    const { name, message } = d;
    const m = Messages({ name, message });
    try {
      await m.save();
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const deleteData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { name } = d;
    try {
      await Messages.deleteOne({ name });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});
