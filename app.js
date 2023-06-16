require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const PORT = 3000;
// authentication
const session = require('express-session');
const passport = require('passport');

// express app
const app = express();

// individual routes
const adminRouter = require('./routes/adminRouter');
const contactRouter = require('./routes/contactRouter');
const aboutRouter = require('./routes/aboutRouter');
const loginRouter = require('./routes/loginRouter');

// wildcard router subject to delete?
const routes = require('./routes/index');

// connection
require('./config/connection');

// register viewengie
app.set('view engine', 'ejs');

// authentication
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
  }))
  
app.use(passport.initialize());
app.use(passport.session());

// below is provided by the offiical documentaiton but doesn't work
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
// }));
// app.use(passport.authenticate('session'));

// middleware & static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use('/', adminRouter);
app.use('/', contactRouter);
app.use('/', aboutRouter);
app.use('/', loginRouter);
app.use(routes);

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
