const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/baltimoreHotWings"
);

const restaurantSeed = [
  {
    name: "Cardinal Tavern",
    location: {
      streeLineOne: "901 S. Clinton St.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: {
        Monday: "4pm-2am",
        Tuesday: "4pm-2am",
        Wednesday: "4pm-2am",
        Thursday: "4pm-2am",
        Friday: "4pm-2am",
        Saturday: "10am-2am",
        Sunday: "10am-2am"
      },
      wings: {
        Monday: { price: 12, count 12 },
        Tuesday: { price: 12, count 12  },
        Wednesday: { price: 12, count 12  },
        Thursday: { price: 12, count 12  },
        Friday: { price: 12, count 12  },
        Saturday: { price: 12, count 12  },
        Sunday: { pprice: 12, count 12  }
      }
    }
  },
  {
    name: "Mahaffey's Pub",
    location: {
      streeLineOne: "2706 Dillon St.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: {
        Monday: "3pm-2am",
        Tuesday: "3pm-2am",
        Wednesday: "3pm-2am",
        Thursday: "3pm-2am",
        Friday: "12pm-2am",
        Saturday: "12am-2am",
        Sunday: "12am-2am"
      },
      wings: {
        Monday: { price: 10, count: 10 },
        Tuesday: { pprice: 10, count: 10 },
        Wednesday: { price: 5, count: 10, isSpecial: true },
        Thursday: { price: 10, count: 10 },
        Friday: { price: 10, count: 10 },
        Saturday: { price: 10, count: 10 },
        Sunday: { price: 10, count: 10 }
      }
    }
  },
  {
    name: "Sharky's Bar & Grill",
    location: {
      streeLineOne: "2819 Eastern Ave.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: {
        Monday: "10am-2am",
        Tuesday: "10am-2am",
        Wednesday: "10am-2am",
        Thursday: "10am-2am",
        Friday: "10am-2am",
        Saturday: "10am-2am",
        Sunday: "10am-2am"
      },
      wings: {
        Monday: { price: 8.75, count: 10 },
        Tuesday: { price: 8.75, count: 10 },
        Wednesday: { price: 7, count: 10, isSpecial: true },
        Thursday: { price: 8.75, count: 10 },
        Friday: { price: 8.75, count: 10 },
        Saturday: { price: 8.75, count: 10 },
        Sunday: { pprice: 8.75, count: 10 }
      }
    }
  },
];

db.Restaurant
  .remove({})
  .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
