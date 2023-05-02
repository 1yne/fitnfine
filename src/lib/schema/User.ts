import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const reqString = {
  type: String,
  required: true,
};

const reqNum = {
  type: Number,
  required: true,
};

const reqArray = {
  type: Array,
  required: true,
};

const str = {
  type: String,
};

const UserSchema = new Schema({
  _id: reqString,
  username: reqString,
  passwordHash: reqString,
  userAuthToken: reqString,
  email: reqString,
  weight: reqNum,
  height: reqNum,
  likedWorkouts: reqArray,
  profilePicture: str,
});

const name = "Users";
export default models[name] || model(name, UserSchema, name);
