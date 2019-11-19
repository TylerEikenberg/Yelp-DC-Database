mongoose = require("./connection.js");
const Restaurant = require("../models/restaurant");
const Review = require("../models/review");
const restaurantsJson = require("./data/places.json");
const axios = require("axios");

//TODO: CHANGE URL TO DEPLOYED API ON HEROKU
const reviewsUrl = "http://localhost:5200/reviews";
//fetch api to get all reviews
const getReviews = async () => {
  const res = await axios.get(reviewsUrl);
  return res.data.map(({ restaurantId, _id, name, rating, review }) => {
    return {
      restaurantId,
      id: _id,
      name,
      rating,
      review
    };
  });
};

/********
 *
 *
 *
 * Creates restaurant data.
 */
const restaurantData = restaurantsJson.map(item => {
  let categoryArray = [];
  item.categories.forEach(item => {
    categoryArray.push(item.title);
  });

  //   let reviewsArray = [];
  //   allReviewDataTotal.forEach(review => {
  //     if (review.restaurantId === item._id) {
  //       reviewsArray.push(review);
  //     }
  //   });
  //   console.log(reviewsArray);
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
    // reviews: reviewsArray
  };
  return restaurant;
});

const runSeeder = async () => {
  const deletedRestaurants = await Restaurant.deleteMany({});
  console.log(deletedRestaurants);

  const restaurants = await Restaurant.create(restaurantData);
  console.log(restaurants.length);
  console.log("restaurants done");

  const allReviews = await getReviews();
  console.log(allReviews.length);

  process.exit();
};

runSeeder();
