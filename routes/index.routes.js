const Layout = require('../components/Layout');

const router = require('express').Router();

const mainRouter = require('./main.routes');
const cardRouter = require('./card.routes');

// router.get('/', (req, res) => {
//   res.renderComponent(Layout, { user: 'Max' });
// });
// промежуточная функция, проверить работоспособность сервера


router.use('/', mainRouter);
router.use('/magicard', cardRouter);

module.exports = router;
