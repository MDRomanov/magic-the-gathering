const router = require('express').Router();

const { Card } = require('../db/models');
const CardList = require('../components/CardList');
const AddCard = require('../components/AddCard');
const EditCard = require('../components/EditCard');
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

router.delete('/:cardId', async (req, res) => {
  try {
    const cardDel = await Card.findOne({ where: { id: req.params.cardId } });
    if (cardDel.userId === req.session.userId) {
      const cardNum = await Card.destroy({ where: { id: req.params.cardId } });
      res.json({ cardNum });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.get('/edit/:cardId', async (req, res) => {
  try {
    const card = await Card.findOne({ where: { id: req.params.cardId } });
    res.renderComponent(EditCard, { title: 'Edit Card', card });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

// попытка в update
router.put('/edit/:cardId', async (req, res) => {
  const { cardId } = req.params;
  console.log('here', cardId);
  const { name, img, price, quality } = req.body;
  if (name && img && price && quality) {
    const cardEdit = await Card.findOne({
      where: { cardId, userId: req.session.userId },
    });
    cardEdit.name = name;
    cardEdit.img = img;
    cardEdit.price = price;
    cardEdit.quality = quality;
    cardEdit.save();
    res.json({ message: 'ok' });
    // return res.redirect(`/magicard/${cardEdit.id}`);
  }

  // return res.redirect('magicard/');
});

module.exports = router;
