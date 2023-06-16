const mongoose = require('mongoose');
const {Schema} = mongoose;

const contentSchema = new Schema({
  // image: {
  //   type: String
  // },
  name: {
    type: String,
    required: [true, 'Name is required.'],
    minlength:[1,'Minimun length for the name is 1 character.']
  },
  location: {
    type: String,
    required: [true, 'Location is required.'],
    minlength:[1,'Minimun length for the location is 1 character.']
  },
  hikedAt: {
    type: String,
    required: [true, 'Time is required.'],
    minlength:[1,'Minimun length for the name is 1 character.']
    // min: [1, 'Minimun price is 1']
  },
  rating: {
    type: String,
    required: [true, 'Rating is required.'],
    // min: [1, 'Minimun number of rating is 1']
  },
  details: {
    type: String,
  }
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;