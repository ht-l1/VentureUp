const siteData = require('../data/siteData');
const Login = require('../models/loginModel');

module.exports = {
  login: (request, response) => {
    response.render('pages/login', {
      copyrightYear: siteData.year
    });
  },
}