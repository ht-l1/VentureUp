const siteData = require('../data/siteData');

module.exports = {
  index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  }
}