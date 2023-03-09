const CardInfo = require('../components/CardInfo');
const { Card } = require('../db/models');
const AddCard = require('../components/AddCard.jsx');

const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.renderComponent(AddCard, { title: 'Add new card' });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, img, price, quality } = req.body;
    const newCard = await Card.create({
      name,
      img,
      price,
      newOrOld: quality,
      userId: req.session.userId,
    });
    if (newCard) {
    //   res.json({ message: 'Ваша карточка добавлена' });
      res.redirect('/magicard');
      // res.json({
      //   html: res.renderComponent(CardInfo, { newCard }, { htmlOnly: true }),
      // });
    } else {
      res.json({ message: 'При регистрации вашей карточки произошла ошибка' });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
