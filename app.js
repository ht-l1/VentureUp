require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const PORT = 3000;

// express app
const app = express();

// individual routes
const adminRouter = require('./routes/adminRouter');
const contactRouter = require('./routes/contactRouter');
const aboutRouter = require('./routes/aboutRouter');
const loginRouter = require('./routes/loginRouter');
app.use('/', adminRouter);
app.use('/', contactRouter);
app.use('/', aboutRouter);
app.use('/', loginRouter);

// wildcard router subject to delete?
const routes = require('./routes/index');
app.use(routes);

// connection
require('./config/connection');


// register viewengie
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
