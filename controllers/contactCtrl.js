const siteData = require('../data/siteData');
const Contact = require('../models/contactModel');

module.exports = {
  contact: (request, response) => {
    response.render('pages/contact', {
      copyrightYear: siteData.year
    });
  },
}