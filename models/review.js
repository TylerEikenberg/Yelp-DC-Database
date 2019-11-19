const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: String,
  rating: Number,
  review: String
});

module.exports = mongoose.model("Review", reviewSchema);