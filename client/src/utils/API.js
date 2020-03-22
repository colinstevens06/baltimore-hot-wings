import axios from "axios";

export default {
  getRestaurants: function () {
    return axios.get("/api/restaurants")
  },

  getRestaurant: function (id) {
    return axios.get("/api/restaurants/" + id)
  }
};
