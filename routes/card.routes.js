const router = require('express').Router();

const { Card } = require('../db/models');
const CardList = require('../components/CardList');
const AddCard = require('../components/AddCard');
// const CardInfo = require('../components/CardInfo');
// const mainRouter = require('./main.routes');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.renderComponent(CardList, { title: 'Card List', cards });
  } catch (error) {
    res.send(console.log(error.message));
  }
});



module.exports = router;
