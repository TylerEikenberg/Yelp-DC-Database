const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  restaurants: [String] //array of restaurant names
});

module.exports = mongoose.model("Category", categorySchema);
