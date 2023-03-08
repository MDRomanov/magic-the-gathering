const router = require('express').Router();

const Main = require('../components/Main');

router.get('/', (req, res) => {
  try {
    res.cookie('home', 'Welcome to our website!', {
      maxAge: 30000,
      httpOnly: true,
    });
    res.renderComponent(Main, { title: 'Main' });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// TODO: Add cookies, change error to render Error component

module.exports = router;