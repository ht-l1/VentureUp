const siteData = require('../data/siteData');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

module.exports = {
  contact: (request, response) => {
    response.render('pages/contact', {
      copyrightYear: siteData.year
    });
  },
}