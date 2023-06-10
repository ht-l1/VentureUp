const siteData = require('../data/siteData');
const inventoryArray = require('../data/contentData.js');

module.exports = {
  index: (request, response) => {
    response.render('pages/index', {
        inventoryArray,
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  }
}