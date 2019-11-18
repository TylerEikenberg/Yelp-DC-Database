const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  imageUrl: String,
  yelpUrl: String,
  reviewCount: Number,
  categories: [String],
  rating: Number,
  phone: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  location: {
    address: String,
    city: String,
    zip: String
  }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
