import express from 'express';

import home from '../controllers/home';

const indexRouter = express.Router();

indexRouter.get('/', home.indexPage);
indexRouter.get('/about', home.aboutPage);
indexRouter.get('/messages', home.messagesPage);
indexRouter.post('/messages', home.addMessage);

export default indexRouter;
