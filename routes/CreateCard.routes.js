const router = require('express').Router();
const CreateCard = require('../components/CreateCard');
const { Card } = require('../db/models');

router.get('/', (req, res) => {
  try {
    res.renderComponent(CreateCard, { title: 'Create new card' });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

// router.put('/:studentId', async (req, res) => {
//   try {
//     const student = await Card.findOne({ where: { id: req.params.studentId } });
//     if (student.userId === req.session.userId) {
//       const studentNum = await Card.destroy({
//         where: { id: req.params.studentId },
//       });
//       res.json({ studentNum });
//     }
//   } catch (error) {
//     res.send(console.log(error.message));
//   }
// });
router.put('/', async (req, res) => {
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
