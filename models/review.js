const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  restaurantId: String,
  name: String,
  rating: Number,
  review: String
  // createdAt: String
});

module.exports = mongoose.model("Review", reviewSchema);
