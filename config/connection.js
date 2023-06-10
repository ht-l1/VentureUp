const mongoose = require('mongoose');

// adding my mongoDB atlas Cluster0
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successful connection with MongoDB Server");
  })
  .catch((error) => {
    console.log("Error with MongoDB's connectivity", error);
  });