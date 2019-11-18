const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  restaurants: [String]
});

module.exports = mongoose.model("Category", categorySchema);
