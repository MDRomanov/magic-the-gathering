const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Regi = require('../components/Regi');
const Login = require('../components/Login');

router.get('/registration', (req, res) => {
  res.renderComponent(Regi, { title: 'Registration' });
});
router.post('/registration', async (req, res) => {
  try {
    const { name, email, password, password2 } = req.body;
    console.log(name.value);
    if (name && email && password && password2) {
      if (password === password2) {
        const emailUser = await User.findOne({ where: { email } });
        console.log(emailUser);
        if (!emailUser) {
          const salt = await bcrypt.genSalt(10);
          // const hash = await bcrypt.hash(password, 10);
          const NewUser = await User.create({
            name,
            email,
            password: salt,
            city: 'Bobry',
          });
          req.session.userId = NewUser.id;
          res.json({ message: 'ok' });
        } else {
          res.json({ message: 'Email already exists' });
        }
      } else {
        res.json({ message: "Passwords don't match" });
      }
    } else {
      res.json({ message: 'WOW WOW заполни поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/login', (req, res) => {
  res.renderComponent(Login, { title: 'login' });
});

router.post('/login', async (req, res) => {
  // try {
  const { email, password } = req.body;
  console.log(email, password);
  // const emailUser = await User.findOne({ where: { email, password } });
  // console.log(emailUser);
  // res.send(emailUser);
  // if (email && password ) {
  //   if (email===email && password === password) {
  const emailUser = await User.findOne({ where: { email: req.body.email } });
  console.log(emailUser);
  if (emailUser) {
    const isSame = await bcrypt.compare(req.body.password, emailUser.password);
    console.log(isSame);
    res.json({ message: 'ok' });
  } else {
    res.json({ message: 'Email not exists' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.app.locals = {};
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
