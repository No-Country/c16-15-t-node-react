import mongoose from 'mongoose';
require('dotenv').config();

const connectDB = async function(){
  try{
    await mongoose.connect();
    return mongoose.connection;
  } catch (error){
    console.log(error);
  }
}

export default connectDB;