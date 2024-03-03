import mongoose from 'mongoose';

const collectionName = 'event';

const eventsSchema = mongoose.Schema(
  {
  name: {type: String, required: [true, 'An event name is required']},
  address : {type: String, required: [true, 'An event address is required']},
  date : {type: Date, required: [true, 'An date is required']},
  longitude: String,
  latitude: String,

  },
  { versionKey: false }
);

export const eventModel = mongoose.model(collectionName, eventsSchema);