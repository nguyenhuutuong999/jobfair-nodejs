const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = new Schema({
  text: String,
  type: String,
  anwsers: Array,
});

module.exports = mongoose.model("Question" ,Question);
