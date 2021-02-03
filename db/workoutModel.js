const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  type: String,
  settings: {},
  numberExercises: Number,
  tags: [String],
  description: String,
  exercises: [{}],
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;