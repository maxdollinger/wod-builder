const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  tags: [String],
  url: String,
  description: String,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;