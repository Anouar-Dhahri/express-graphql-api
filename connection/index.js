const mongoose = require('mongoose');

const mongoConnect = async (req, res, next) => {
  try {
    //use process.env.URI to connect to your local mongo db
    await mongoose.connect(process.env.LIVE_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
      console.log("Connected Succesfully to MongoDB")
    }).catch((err)=> {
      res.json(err)
    });
  } catch (error) {
    res.json(error)
  }

}

module.exports = mongoConnect
