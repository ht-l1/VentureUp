const siteData = require('../data/siteData');
const Content = require('../models/contentModel');

module.exports = {
  all_content: (request, response) => {
    Content.find({}, (error, allContent) => {
      if(error){
        return error;
      } else {
        response.render('pages/index', {
            copyrightYear: siteData.year,
            inventoryArray: allContent
        });
      }
    })
  },

  content_detail: (request, response) => {
    const {_id} = request.params;
    Content.findOne({_id: _id}, (error, foundContent) => {
      if(error) {
        return error;
      } else {
        response.render('pages/ContentDetail', {
          copyrightYear: siteData.year,
          inventoryItem : foundContent
        });
      }
    })
  },
  content_create_post: (request, response) => {
    const {image, name, location, hikedAt, rating, details} = request.body;
    const newContent = new Content ({
      image: imgSrc,
      name: name,
      location: location,
      hikedAt: hikedAt,
      rating: rating,
      details: details
    });

    newContent.save();

    response.redirect("/admin/admin-Content"); 
  },
  content_update_put: (request, response) => {
    const {_id} = request.params;
    
    const {image, name, location, hikedAt, rating, details} = request.body;

    Content.findByIdAndUpdate(_id, {$set: {
      image: imgSrc,
      name: name,
      location: location,
      hikedAt: hikedAt,
      rating: rating,
      details: details
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin/admin-content');
      }
    })
  },
  content_delete: (request, response) => {
    const { _id } = request.params;
    Content.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin/admin-content')
      }
    }); 
  }
}
