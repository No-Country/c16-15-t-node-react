import mongoose from 'mongoose';

const collectionName = 'user';

const usersSchema = mongoose.Schema(
  {
  email: {type: String, required: [true, 'email is required']},
  password : {type: String, required: [true, 'password is required']},
  role : {type: String, required : false},

  },
  { versionKey: false }
);

export const userModel = mongoose.model(collectionName, usersSchema);