import express from 'express';

import { messagesPage, addMessage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);

export default indexRouter;
