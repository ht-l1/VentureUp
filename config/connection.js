const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/carolsBookstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successful connection with MongoDB Server");
  })
  .catch((error) => {
    console.log("Error with MongoDB's connectivity", error);
  });
