const express = require("express");
const app = express();
const parser = require("body-parser");

const Restaurant = require("./models/restaurant");

var cors = require("cors");

app.use(parser.json());
app.use(cors());
app.use(express.static("doc"));

app.get("/restaurants", (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.json(restaurants);
  });
});

app.listen(5200, () => {
  console.log(`Hey bruh server is runnin on port 5200 `);
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
