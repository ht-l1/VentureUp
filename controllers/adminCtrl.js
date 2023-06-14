const siteData = require('../data/siteData');
const Content = require('../models/contentModel');

module.exports = {
  // all_content: This method retrieves all content from the database using the Content model and renders the pages/admin view, passing the retrieved content as 'InventoryArray'
  all_content: (request, response) => {
    Content.find({}, (error, allContent) => {
      if(error){
        return error;
      } else {
        response.render('pages/admin', {
            copyrightYear: siteData.year,
            inventoryArray: allContent
        });
      }
    })
  },
  // admin: This method renders the pages/admin view without any additional data.
  // admin: (request, response) => {
  //   response.render('pages/admin', {
  //     copyrightYear: siteData.year,
  //   });
  // },
  admin: async (request, response) => {
    try {
      const allContent = await Content.find({});
      response.render('pages/admin', {
        copyrightYear: siteData.year,
        inventoryArray: allContent
      });
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  },
// content detail page
  content_detail: (request, response) => {
    const {_id} = request.params;
    Content.findOne({_id: _id}, (error, foundcontent) => {
      if(error) {
        return error;
      } else {
        response.render('pages/contentDetail', {
          copyrightYear: siteData.year,
          inventoryItem : foundContent
        });
      }
    })
  },

  // create_content and actually submit: This method renders the pages/contentCreate view without any additional data.
  submit_form: (request, response) => {
    const {name, location, hikedAt, rating, details} = request.body;
    const newContent = new Content ({
      name: name,
      location: location,
      hikedAt: hikedAt,
      rating: rating,
      details: details
    });

    newContent.save();

    response.redirect("/admin"); 
  },

  create_content: (request, response) => {
    response.render('pages/contentCreate', {
      copyrightYear: siteData.year,
    });
  },

  // content_update_get: This method retrieves a specific content item from the database based on the _id parameter in the request and renders the pages/updateContent view, passing the retrieved content as foundContent.
  // content_update_get: (request, response) => {
  //   const { _id } = request.params;
  //   Content.findOne({_id: _id}, (error, foundContent) => {
  //     if(error) {
  //       return error;
  //     } else {
  //       response.render('pages/updateContent', {
  //         copyrightYear: siteData.year,
  //         foundContent: foundContent
  //       });
  //     }
  //   });    
  // },
  
  content_delete: (request, response) => {
    const { _id } = request.params;
    Content.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/pages/admin')
      }
    }); 
  }
}