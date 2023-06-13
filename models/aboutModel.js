const mongoose = require('mongoose');
const {Schema} = mongoose;

const aboutSchema = new Schema({
  // image: {
  //   type: String
  // },
  name: {
    type: String,
    required: [true, 'A first name is required.'],
    minlength:[1,'Minimun length for the first name is 1 characters.']
  },
  location: {
    type: String,
    required: [true, 'The author\'s name is required.'],
    minlength:[5,'Minimun length for the author\'s name is 5 characters.']
  },
  hikedAt: {
    type: String,
    required: [true, 'The price is required.'],
    // min: [1, 'Minimun price is 1']
  },
  rating: {
    type: String,
    required: [true, 'The price is required.'],
    // min: [1, 'Minimun number of star rating is 1']
  },
  details: {
    type: String,
  }
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;