import axios from "axios";

export default {
  getRestaurants: function () {
    return axios.get("/api/restaurants/home")
  },

  getRestaurant: function (id) {
    return axios.get("/api/restaurants/" + id)
  },

   login: function(username, pass) {
    return axios.post("api/restaurants/login", {}, {
      auth: {
        username: username,
        password: pass
      }
    })
  }
};
