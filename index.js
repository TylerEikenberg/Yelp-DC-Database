const express = require("express");
const app = express();
const parser = require("body-parser");

const Restaurant = require("./models/restaurant");
const Review = require("./models/review");

var cors = require("cors");

app.use(parser.json());
app.use(cors());
app.use(express.static("doc"));

/**
 * Restaurant paths
 */
app.get("/restaurants", (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.json(restaurants);
  });
});
app.get("/restaurants/:id", (req, res) => {
  Restaurant.findOne({ _id: req.params.id }).then(restaurants => {
    res.json(restaurants);
  });
});
app.get("/restaurants/category/:category", (req, res) => {
  Restaurant.find({ categories: req.params.category }).then(restaurants => {
    res.json(restaurants);
  });
});

/**
 * Review paths
 */
app.get("/reviews", (req, res) => {
  Review.find({}).then(reviews => {
    res.json(reviews);
  });
});
app.post("/reviews/create", (req, res) => {
  Review.create(req.body).then(review => {
    res.json(review);
  });
});
app.put("/reviews/update/:id", (req, res) => {
  Review.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    review => {
      res.json(review);
    }
  );
});
app.delete("/reviews/delete/:id", (req, res) => {
  Review.findOneAndRemove({ _id: req.params.id }).then(review => {
    res.json(review);
  });
});

/**
 * hey listen
 */
app.listen(5200, () => {
  console.log(`Hey listen, server is runnin on port 5200 `);
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
