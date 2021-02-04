const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  tags: {
    type: [String],
    required: true
  },
  url: String,
  description: String,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;