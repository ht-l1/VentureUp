const siteData = require('../data/siteData');
const Content = require('../models/contentModel');

module.exports = {
  admin: (request, response) => {
    response.render('pages/admin', {
      copyrightYear: siteData.year
    });
  },
  admin_content: (request, response) => {
    Content.find({}, (error, allContent) => {
      if(error){
        return error;
      } else {
        response.render('pages/adminContent', {
          copyrightYear: siteData.year,
          inventoryArray: allContent
        });
      }
    })
  },
  create_content: (request, response) => {
    response.render('pages/contentCreate', {
      copyrightYear: siteData.year,
    });
  },
  content_update_get: (request, response) => {
    const { _id } = request.params;
    Content.findOne({_id: _id}, (error, foundContent) => {
      if(error) {
        return error;
      } else {
        response.render('pages/updateContent', {
          copyrightYear: siteData.year,
          foundContent: foundContent
        });
      }
    });    
  },
}