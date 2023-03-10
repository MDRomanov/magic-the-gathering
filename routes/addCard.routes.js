const router = require('express').Router();
const CardInfo = require('../components/CardInfo');
const { Card } = require('../db/models');
const AddCard = require('../components/AddCard.jsx');

router.get('/', (req, res) => {
  try {
    res.renderComponent(AddCard, { title: 'Add new card' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, img, price, quality } = req.body;
    if (name && img && price && quality) {
      const newCard = await Card.create({
        name,
        img,
        price,
        newOrOld: quality,
        userId: req.session.userId,
      });
      if (newCard) {
        res.json({ message: 'Ваша карточка добавлена' });
      } else {
        res.json({
          message: 'При регистрации вашей карточки произошла ошибка',
        });
      }
    } else {
      res.json({ message: 'Братишка, заполни все поля пжл' });
    }
    // if (!newCard) {
    //   res.json({ message: 'ваша ккарточка не добавлена ' });
    // } else {
    //   res.json({ message: 'данные которые вы ввели некоректны' });
    // }
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
