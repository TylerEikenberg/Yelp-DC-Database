const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  name: String,
  imageUrl: String,
  yelpUrl: String,
  reviewCount: Number,
  categories: [String],
  rating: Number,
  phone: String,
  coordinates: {
    latitude: Number,
    longtitude: Number
  },
  location: {
    address: String,
    city: String,
    zip: String
  }
});

module.exports = mongoose.model("Film", FilmSchema);
