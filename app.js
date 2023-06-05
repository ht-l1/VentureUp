// First, require the following dependencies: express and morgan
// Create a const variable called app with the value of express()
// Create a const variable called port with the value of 3000
// Use morgan as a middleware for this project

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));

// Create five  basic GET routes with the following information

app.get('/', (req, res) => {
  res.send('This route points to the Home page');
});

app.get('/about', (req, res) => {
  res.send('This route points to the About page');
});

app.get('/login', (req, res) => {
  res.send('This route points to the Login page');
});

app.get('/admin-console', (req, res) => {
  res.send('This route points to the Admin Console page');
});

app.get('/admin-console/create-book', (req, res) => {
  res.send('This route points to the Create page');
});

// use app.listen() to start the server and send a console.log to the terminal with the localhost URL
app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});
