import connectDB from "../../db.js";
import mongoose from "mongoose";

export const getAll = async (req, res) => {
  try {
    const database = await connectDB();
    const collection = database.collection('places');
    const placesCollection = await collection.find({}).toArray();
    const lengthCollection = placesCollection.length;
    return res.status(200).send({ places: placesCollection, length: lengthCollection, status: 'OK' });
  } catch (error) {
    console.error('Error obtaining data from database: ' + error.message);
    return res.status(500).send({ error: 'Error obtaining data from database:' });
  }
};

export const getOrder = async(req, res) => {
  try{
    const id = new mongoose.Types.ObjectId(req.params.id);
    const database = await connectDB();
    const collection = database.collection('places');;
    const filter = { _id: { $eq: id } };
    const placeDB = await collection.findOne(filter);
    if (placeDB) return res.status(200).send({order: placeDB, status: 'OK'});
    else return res.status(400).send({error: 'Id not found'})
  }catch (error){
    console.error('Error obtaining data from database: ' + error.message);
    return res.status(500).send({ error: 'Error obtaining data from database:' });
  }

};

