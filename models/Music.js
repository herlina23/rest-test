const mongoose = require("mongoose");

// Music Schema
const musicSchema = mongoose.Schema({
  music_id: {
    type: String,
    required: true
  },
  music_title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Music = (module.exports = mongoose.model("Music", musicSchema));
