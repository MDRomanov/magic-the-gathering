const Layout = require('../components/Layout');

const router = require('express').Router();

const mainRouter = require('./main.routes');

// router.get('/', (req, res) => {
//   res.renderComponent(Layout, { user: 'Max' });
// });

// промежуточная функция, проверить работоспособность сервера

router.use('/', mainRouter);

module.exports = router;
