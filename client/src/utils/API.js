import axios from "axios";

export default {
  getRestaurants: function () {
    return axios.get("/api/restaurants/home")
  },

  getRestaurant: function (id) {
    return axios.get("/api/restaurants/" + id)
  },

  login: async function (username, pass) {
    try {
      const aResponse = await axios.post("api/restaurants/login", {
        body: {
          username: username,
          password: pass
        }
      })

      if (aResponse.status === 200) {
        return 'success'
      }
    }
    catch (err) {
        return 'fail'
    }
  }
};
