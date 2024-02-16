import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const connectDB = async function(){
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
    return mongoose.connection;
  } catch (error){
    console.error(error.message);
    throw error;
  }
}

export default connectDB;