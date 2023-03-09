const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../components/Registration.jsx');
const Loginisation = require('../components/Loginisation.jsx');
const { User } = require('../db/models');

const router = express.Router();

router
  .route('/registration')
  .get((req, res) => {
    res.renderComponent(Registration, { title: 'Registration' });
  })
  .post(async (req, res) => {
    try {
      const { password, password2, name, email } = req.body;
      console.log(email.value + 'auth');
      if (password && password2 && name && email) {
        if (password === password2) {
          const emailUser = await User.findOne({ where: { email } });
          if (!emailUser) {
            const hash = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, email, password: hash });
            req.session.userId = newUser.id;
            res.app.locals.user = newUser.name;
            res.app.locals.userId = newUser.id;

            res.json({ message: "зарегистрировали" });

          } else {
            res.json({ message: 'Такой email уже существует' });
          }
        } else {
          res.json({ message: 'Ваши пароли не совпадают' });
        }
      } else {
        res.json({ message: 'Заполните все поля' });
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  });

router
  .route('/loginisation')
  .get((req, res) => {
    res.renderComponent(Loginisation, { title: 'Loginisation' });
  })
  .post(async (req, res) => {
    try {
      const { password, email } = req.body;
      if (password && email) {
        const user = await User.findOne({ where: { email } });

        if (user) {
          const isSame = await bcrypt.compare(password, user.password);
          if (isSame) {
            req.session.userId = user.id;
            res.app.locals.user = user.name;
            res.app.locals.userId = user.id;

            res.json({ message: "Авторизировались" });

          } else {
            res.json({ message: 'Неверный email' });
          }
        } else {
          res.json({
            message: 'Мы не нашли вас среди зарегистрированных пользователей',
          });
        }
      } else {
        res.json({ message: 'Заполните все поля' });
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  });

// удаление сессии
router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка удаления сессии' });
    }
    res.app.locals = {};
    res.clearCookie('user_login');
    res.redirect('/magicard');
  });
});
module.exports = router;
