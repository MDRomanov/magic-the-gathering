const router = require("express").Router();

const { Basket, Basketlist, Card } = require("../db/models");
const CardList = require("../components/CardList");
const AddCard = require("../components/AddCard");
const EditCard = require("../components/EditCard");
const cardDetail = require("../components/CardDetail.jsx");
// const mainRouter = require('./main.routes');

router.get("/", async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.renderComponent(CardList, { title: "Card List", cards });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.delete("/:cardId", async (req, res) => {
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

router.get("/:cardId", async (req, res) => {
  try {
    const card = await Card.findOne({ where: { id: req.params.cardId } });
    // if (cardDel.userId === req.session.userId) {
    //   const cardNum = await Card.destroy({ where: { id: req.params.cardId } });
    //   res.json({ cardNum });
    // }
    res.renderComponent(cardDetail, { cardId: req.params.cardId, card });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

// router.post('/:cardId', async (req, res) => {
//   const { name, img } = req.body;

//   try {
//     const card = await Card.findOne({ where: { id: req.params.cardId } });

//     const cardBasketlist = await Basketlist.create({ name, img, userId: req.session.userId });

//     const cardBasket = await Basket.create({ name, img, userId: req.session.userId });

//     res.app.locals.studentName = student.name;

//     res.json({ html: res.renderComponent(StudentCard, { student }, { htmlOnly: true }) });
//   } catch (error) {
//     res.send(console.log(error.message));
//   }
// });
router.get("/edit/:cardId", async (req, res) => {
  try {
    const card = await Card.findOne({ where: { id: req.params.cardId } });
    res.renderComponent(EditCard, { title: "Edit Card", card });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

// попытка в update
router.put("/edit/:cardId", async (req, res) => {
  const cardEdit = await Card.findOne({ where: { id: req.params.cardId } });
  const { name, img, price, quality } = req.body;
  cardEdit.name = name;
  cardEdit.img = img;
  cardEdit.price = price;
  cardEdit.quality = quality;
  cardEdit.save();
  return res.redirect(`/magicard/${cardEdit.id}`);
});

module.exports = router;
