const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  count: {
    type: String,
    required: true
  },
  isSpecial: {
    type: Boolean,
    default: false
  }
})

const hoursSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
  }

})

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    streetLineOne: {
      type: String,
      required: true
    },
    city: {
      name: {
        type: String,
        required: true
      },
      neighborhood: {
        type: String,
        required: true
      }
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    hours:
      [hoursSchema]
  },
  wings: [
    dealSchema
  ]

});


const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
