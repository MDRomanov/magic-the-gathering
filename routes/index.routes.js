const router = require('express').Router();
const Layout = require('../components/Layout');

const mainRouter = require('./main.routes');

const createCardRouter = require('./addCard.routes');

const authorizationRouter = require('./authorization.routes');

const cardRouter = require('./card.routes');
const basketRouter = require('./basket.routes');

router.use('/', mainRouter);
router.use('/magicard', cardRouter);
router.use('/magicard/authorization', authorizationRouter);
router.use('/new', createCardRouter);

router.use('/basket', basketRouter);

module.exports = router;
