const router = require('express').Router();

const { Basket, Basketlist, Card } = require('../db/models');
const CardList = require('../components/CardList');
const AddCard = require('../components/AddCard');
const BasketComponent = require('../components/Basket');
// const CardInfo = require('../components/CardInfo');
// const mainRouter = require('./main.routes');

router.get('/', async (req, res) => {
  try {
    const cards = await Basket.findAll({
      where: { userId: req.session.userId, status: true },
      include: { model: Basketlist, include: { model: Card } },
      raw: true,
    });
    console.log(cards);
    res.renderComponent(BasketComponent, { title: 'Basket', cards });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

// router.get('/', (req,res) => {
//     const {name, img, price} = req.body;
//     try {
//         res.renderComponent(AddCard, {title, currentUser})
//     }
// })

module.exports = router;
