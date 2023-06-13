const siteData = require('../data/siteData');
const About = require('../models/aboutModel');

module.exports = {
  about: (request, response) => {
    response.render('pages/about', {
      copyrightYear: siteData.year
    });
  },
}