const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  type: String,
  tags: [String],
  time: [Number],
  rest: [Number],
  sections: [Number],
  scheme: [Number],
  description: String,
  exercises: [[{}]],
  meta: {
    estimatedDuration: Number,
    totalReps: Number,
    numberExercises: Number,
  }
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;