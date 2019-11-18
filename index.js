const express = require("express");
const app = express();
const parser = require("body-parser");

const Restaurant = require("../models/restaurant");

var cors = require("cors");

app.use(parser.json());
app.use(cors());
app.use(express.static("doc"));
