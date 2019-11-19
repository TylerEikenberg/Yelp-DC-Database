mongoose = require("./connection.js");
const Restaurant = require("../models/restaurant");
const Review = require("../models/review");
const restaurantsJson = require("./data/places.json");
const axios = require("axios");

//TODO: CHANGE URL TO DEPLOYED API ON HEROKU
const reviewsUrl = "http://localhost:5200/reviews";
let allReviewDataTotal = [];
//fetch api to get all reviews
axios.get(reviewsUrl).then(res => {
  let reviewsData = res;
  const allReviews = reviewsData.data.map(item => {
    const review = {};
    review.restaurantId = item.restaurantId;
    review.id = item._id;
    review.name = item.name;
    review.rating = item.rating;
    review.review = item.review;
    return review;
  });
  // console.log(allReviews.length);
  allReviewDataTotal = allReviews;
  console.log(allReviewDataTotal.length);
});

/**
 * Creates restaurant data.
 */
const restaurantData = restaurantsJson.map(item => {
  let categoryArray = [];
  item.categories.forEach(item => {
    categoryArray.push(item.title);
  });
  const restaurant = {
    id: item._id,
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
    // reviews: getReviews(item._id)
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
