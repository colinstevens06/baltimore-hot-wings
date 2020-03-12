const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    hours: {
      Monday: {
        type: String,
      },
      Tuesday: {
        type: String,
      },
      Wednesday: {
        type: String,
      },
      Thursday: {
        type: String,
      },
      Friday: {
        type: String,
      },
      Saturday: {
        type: String,
      },
      Sunday: {
        type: String,
      }

    }
  },
  wings: {
    Monday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Monday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Tuesday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Wednesday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Thursday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Friday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Saturday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
    Sunday: {
      price: {
        type: Number,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      isSpecial: {
        type: Boolean,
        default: false
      }
    },
  }

});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
