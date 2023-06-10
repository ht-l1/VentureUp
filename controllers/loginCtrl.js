const siteData = require('../data/siteData');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

module.exports = {
  login: (request, response) => {
    response.render('pages/login', {
      copyrightYear: siteData.year
    });
  },
}