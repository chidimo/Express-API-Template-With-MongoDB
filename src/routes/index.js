import express from 'express';

import home from '../controllers/home'

const indexRouter = express.Router();

indexRouter.get('/', home.indexPage);
indexRouter.get('/about', home.aboutPage);

export default indexRouter;
