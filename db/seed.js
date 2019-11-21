mongoose = require("./connection.js");
const Restaurant = require("../models/restaurant");
const restaurantsJson = require("./data/places.json");
const axios = require("axios");
const cors = require("cors");

//TODO: CHANGE URL TO DEPLOYED API ON HEROKU
//TODO: CREATE SAMPLE REVIEWS FOR DEPLOYED API
const reviewsUrl = "http://localhost:5200/reviews";
//fetch api to get all reviews
const getReviews = async () => {
  const res = await axios.get(reviewsUrl);
  return res.data.map(({ restaurantId, _id }) => {
    return {
      restaurantId,
      id: _id
    };
  });
};

//TODO:
//SET RESTAURANTS REVIEWS TO LIST IDS OF REVIEWS WITH MATCHING RESTAURANT IDS
/********
 *
 *
 *
 * Creates restaurant data.
 */
const getAllRestaurants = reviewsData => {
  const restaurantData = restaurantsJson.map(item => {
    let categoryArray = [];
    item.categories.forEach(item => {
      categoryArray.push(item.title);
    });
    let i = 0;
    let reviewsArray = [];
    reviewsData.forEach(review => {
      if (review.restaurantId === item._id) {
        i++;
        console.log(i);
      }
    });
    // console.log(reviewsArray.length);
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
      //   reviews: reviewsArray
    };
    return restaurant;
  });
  return restaurantData;
};

//STARTER FUNCTION TO INITIATE EVERYTHING ASYNC
const start = async () => {
  const allReviews = await getReviews();
  const allRestaurants = await getAllRestaurants(allReviews);
  if (allRestaurants.length === 0) {
    await Restaurant.create(allRestaurants);
  }
};

//1. REVIEWS
//2. RESTAURANTS
//3. SEEDER

start();
