const siteData = require('../data/siteData');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

module.exports = {
  about: (request, response) => {
    response.render('pages/about', {
      copyrightYear: siteData.year
    });
  },
}