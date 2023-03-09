const Layout = require("../components/Layout");

const router = require("express").Router();

const mainRouter = require('./main.routes');
const cardRouter = require('./card.routes');
const createCardRouter = require('./addCard.routes');

const authorizationRouter = require('./authorization.routes');

// router.get('/', (req, res) => {
//   res.renderComponent(Layout, { user: 'Max' });
// });
// промежуточная функция, проверить работоспособность сервера

router.use('/', mainRouter);
router.use('/magicard', cardRouter);
router.use('/magicard/authorization', authorizationRouter);
router.use('/new', createCardRouter);

module.exports = router;
