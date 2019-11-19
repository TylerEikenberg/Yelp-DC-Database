mongoose = require("./connection.js");
const Restaurant = require("../models/restaurant");
const Category = require("../models/category");
const Review = require("../models/review");
const restaurantsJson = require("./data/places.json");

const restaurantData = restaurantsJson.map(item => {
  let categoryArray = [];
  item.categories.forEach(item => {
    categoryArray.push(item.title);
  });
  const restaurant = {
    name: item.name,
    imageUrl: item.image_url,
    yelpUrl: item.url,
    reviewCount: item.review_count,
    categories: categoryArray,
    rating: item.rating,
    phone: item.display_phone,
    coordinates: {
      latitude: item.coordinates.latitude,
      longitude: item.coordinates.longitude
    },
    location: {
      address: item.location.address1,
      city: item.location.city,
      zip: item.location.zip
    }
  };
  return restaurant;
});

const runSeeder = async () => {
  const deletedRestaurants = await Restaurant.deleteMany({});
  console.log(deletedRestaurants);

  const restaurants = await Restaurant.create(restaurantData);
  console.log(restaurants.length);
  console.log("restaurants done");
  process.exit();
};

runSeeder();
