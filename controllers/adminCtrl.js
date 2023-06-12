const siteData = require('../data/siteData');
const Content = require('../models/contentModel');
// const Author = require('../models/authorModel');

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
  // admin_authors: (request, response) => {
  //   Author.find({}, (error, allAuthors) => {
  //     if(error){
  //       return error;
  //     } else {
  //       response.render('pages/adminAuthors', {
  //         copyrightYear: siteData.year,
  //         authorArray: allAuthors
  //       });
  //     }
  //   })
  // },
  // create_author: (request, response) => {
  //   response.render('pages/authorCreate', {
  //     copyrightYear: siteData.year,
  //   });
  // },
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
  // author_update_get: (request, response) => {
  //   const { _id } = request.params;
  //   Author.findOne({_id: _id}, (error, foundAuthor) => {
  //     if(error) {
  //       return error;
  //     } else {
  //       response.render('pages/updateAuthor', {
  //         copyrightYear: siteData.year,
  //         foundAuthor: foundAuthor
  //       });
  //     }
  //   });   
  // }
}