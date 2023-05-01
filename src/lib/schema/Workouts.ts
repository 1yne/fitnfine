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

const reqArr = {
  type: Array,
  required: true,
};

const WorkoutSchema = new Schema({
  bodyPart: reqString,
  equipment: reqString,
  gifUrl: reqString,
  _id: reqString,
  name: reqString,
  target: reqString,
  likes: reqNum,
  likedUsers: reqArr
});

const name = "Workouts";
export default models[name] || model(name, WorkoutSchema, name);
