const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  style: String,
  tags: [String],
  time: [Number],
  rest: [Number],
  sections: [Number],
  scheme: [Number],
  description: String,
  exercises: [{}],
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;