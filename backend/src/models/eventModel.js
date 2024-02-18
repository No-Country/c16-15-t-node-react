import mongoose from 'mongoose';

const collectionName = 'events';

const eventsSchema = mongoose.Schema(
  {
  name: {type: String, required: [true, 'An event name is required']},
  Address : {type: String, required: [true, 'An event address is required']},
  Date : {type: Date, required: [true, 'An date is required']},
  Longitude: String,
  Latitude: String,

  },
  { versionKey: false }
);

export const eventsModel = mongoose.model('events', eventsSchema);