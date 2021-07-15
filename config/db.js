// where we want to store the mongodb connection

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


//use async/await rather than promises
//most async/await syntax involves try/catch block
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log('Mongo is connected.')
  } catch(err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
}


module.exports = connectDB;
