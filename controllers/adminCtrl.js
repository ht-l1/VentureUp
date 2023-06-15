  const siteData = require('../data/siteData');
  const Content = require('../models/contentModel');
  const inventoryArray = require('../data/contentData.js');


  module.exports = {
    all_content: async (request, response) => {
      response.render('pages/admin', {
        content: inventoryArray,
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
      });
    },    
    
    // all_content: This method retrieves all content from the database using the Content model and renders the pages/admin view, passing the retrieved content as 'InventoryArray'
    // all_content: async (request, response) => {
    //   try {
    //     const allContent = await Content.find({});
    //     response.render('pages/admin', {
    //       copyrightYear: siteData.year,
    //       inventoryArray: allContent
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     return;
    //   }
    // },
    
    // admin: This method renders the pages/admin view without any additional data.
    // admin: (request, response) => {
    //   response.render('pages/admin', {
    //     copyrightYear: siteData.year,
    //   });
    // },
    // admin: async (request, response) => {
    //   try {
    //     const allContent = await Content.find({});
    //     response.render('pages/admin', {
    //       copyrightYear: siteData.year,
    //       inventoryArray: allContent
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     return;
    //   }
    // },
  // content detail page
  content_detail: async (request, response) => {
    try {
      const { _id } = request.params;
      const foundContent = await Content.findOne({ _id: _id });
      response.render('pages/contentDetail', {
        copyrightYear: siteData.year,
        inventoryItem: foundContent
      });
    } catch (error) {
      console.error(error);
      return;
    }
  },

    // create_content and actually submit: This method renders the pages/contentCreate view without any additional data.
    submit_form: async (request, response) => {
      const { name, location, hikedAt, rating, details } = request.body;
      const newContent = new Content({
        name: name,
        location: location,
        hikedAt: hikedAt,
        rating: rating,
        details: details
      });

      try {
        await newContent.save();
        response.redirect("/admin");
      } catch (error) {
        console.error(error);
        return;
      }
    },

    create_content: async (request, response) => {
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
    
    content_delete: async (request, response) => {
      const { _id } = request.params;
      try {
        await Content.deleteOne({ _id: _id });
        response.redirect('/pages/admin');
      } catch (error) {
        console.error(error);
        return;
      }
    }
  };