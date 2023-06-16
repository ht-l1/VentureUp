  const siteData = require('../data/siteData');
  const Content = require('../models/contentModel');
  // const inventoryArray = require('../data/contentData.js');

  module.exports = {
    // all_content: This method retrieves all content from the database using the Content model and renders the pages/admin view, passing the retrieved content as 'InventoryArray'
   all_content: async (request, response) => {
    const allContent = await Content.find({});  
    response.render('pages/admin', {
        content: allContent,
        // name: siteData.userName,
        // copyrightYear: siteData.year,
        // signedIn: siteData.signedIn
      });
    },    

  // content detail page
  // content_detail: async (request, response) => {
  //   try {
  //     const { _id } = request.params;
  //     const foundContent = await Content.findOne({ _id: _id });
  //     response.render('pages/contentDetail', {
  //       copyrightYear: siteData.year,
  //       inventoryItem: foundContent
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     return;
  //   }
  // },


    // create_content: This method renders the pages/contentCreate view without any additional data.
    
    create_content: async (request, response) => {
      response.render('pages/contentCreate', {
        copyrightYear: siteData.year,
      });
    },

    // actually submit
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
        const allContent = await Content.find({});
        response.render('pages/admin', {
          content: allContent,
          name: siteData.userName,
          copyrightYear: siteData.year,
          signedIn: siteData.signedIn
        });
      } catch (error) {
        console.error(error);
        return;
      }
    },
    
    // UPDATE!!
    content_update_get: async (request, response) => {
      try {
        const { _id } = request.params;
        const foundContent = await Content.findOne({ _id }).exec();
        response.render('pages/updateContent', {
          copyrightYear: siteData.year,
          foundContent: foundContent
        });
      } catch (error) {
        console.error(error);
        return;
      }
    },
    
    // content_update_put: async (request, response) => {
    //   const { _id } = request.params;
    //   const { name, location, hikedAt, rating, details } = request.body;
    
    //   try {
    //     await Content.updateOne(
    //       { _id: _id },
    //       { $set: { name, location, hikedAt, rating, details } }
    //     );
    //     response.redirect('/admin');
    //   } catch (error) {
    //     console.error(error);
    //     return;
    //   }
    // },

    content_update_put: async (request, response) => {
      try {
        const { _id } = request.params;
        const { name, location, hikedAt, rating, details } = request.body;
    
        await Content.findByIdAndUpdate(_id, {
          name: name,
          location: location,
          hikedAt: hikedAt,
          rating: rating,
          details: details
        });
    
        response.redirect('/admin');
      } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
      }
    },
    
    // DETELE!!
    content_delete: async (request, response) => {
      const { _id } = request.params;
      try {
        await Content.deleteOne({ _id: _id });
        response.redirect('/admin'); 
      } catch (error) {
        console.error(error);
        return;
      }
    },
    
  }