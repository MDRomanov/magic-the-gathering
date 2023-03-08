require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const renderComponents = require('./middleware/renderComponent');
// const indexRouter = require('./routes/index.routes');
const sessionConfig = require('./config/sessionConfig');
// const { cookiesCleaner, getUser } = require('./middleware/auth');

const app = express();

const port = process.env.PORT || 3000;

// TODO:в папке config создать файл serverConfig и перенести
// туда все app.use

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookiesCleaner);
// app.use(getUser);
app.use(renderComponents);
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
app.use(morgan('dev'));

app
  .listen(port, () => {
    /* eslint-disable no-console */
    console.log('Server is working at port', port);
  })
  .on('error', (error) => {
    /* eslint-disable no-console */
    console.log('Error on server');
    console.log(error.message);
    /* eslint-enable no-console */
  });
