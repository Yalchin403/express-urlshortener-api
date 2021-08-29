const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI,{
      useNewUrlParser: true
    })
    console.log("Successfully connected to DB!")
  }
  catch(err){
    console.log(err.message);
  }
};


module.exports = connectDB;
