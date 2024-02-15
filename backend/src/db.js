import mongoose from 'mongoose';
import { config } from 'dotenv';
config({ path: process.ENV });

const connectDB = async function(){
  try{
    await mongoose.connect(process.env.MONGO_URI);
    return mongoose.connection;
  } catch (error){
    console.log(error);
  }
}

export default connectDB;