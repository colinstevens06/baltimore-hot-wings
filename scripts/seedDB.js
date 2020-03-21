const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Restaurants collection and inserts the restaurants below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/baltimoreHotWings"
);

const restaurantSeed = [
  {
    name: "Cardinal Tavern",
    location: {
      streetLineOne: "901 S. Clinton St.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: [
        { day: "Monday", time: "4pm-2am" },
        { day: "Tuesday", time: "4pm-2am" },
        { day: "Wednesday", time: "4pm-2am" },
        { day: "Thursday", time: "4pm-2am" },
        { day: "Friday", time: "4pm-2am" },
        { day: "Saturday", time: "10am-2am" },
        { day: "Sunday", time: "10am-2am" }
      ]
    },
    wings:
      [{ day: "Monday", price: 12, count: 12 },
      { day: "Tuesday", price: 12, count: 12 },
      { day: "Wednesday", price: 12, count: 12 },
      { day: "Thursday", price: 12, count: 12 },
      { day: "Friday", price: 12, count: 12 },
      { day: "Saturday", price: 12, count: 12 },
      { day: "Sunday", price: 12, count: 12 }]


  },
  {
    name: "Mahaffey's Pub",
    location: {
      streetLineOne: "2706 Dillon St.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: [
        { day: "Monday", time: "3pm-2am" },
        { day: "Tuesday", time: "3pm-2am" },
        { day: "Wednesday", time: "3pm-2am", },
        { day: "Thursday", time: "3pm-2am", },
        { day: "Friday", time: "12pm-2am", },
        { day: "Saturday", time: "12am-2am", },
        { day: "Sunday", time: "12am-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 10, count: 10, isSpecial: false },
      { day: "Tuesday", price: 10, count: 10, isSpecial: false },
      { day: "Wednesday", price: 5, count: 10, isSpecial: true },
      { day: "Thursday", price: 10, count: 10, isSpecial: false },
      { day: "Friday", price: 10, count: 10, isSpecial: false },
      { day: "Saturday", price: 10, count: 10, isSpecial: false },
      { day: "Sunday", price: 10, count: 10, isSpecial: false }
    ]

  },
  {
    name: "Sharky's Bar & Grill",
    location: {
      streetLineOne: "2819 Eastern Ave.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: [
        { day: "Monday", time: "10am-2am" },
        { day: "Tuesday", time: "10am-2am" },
        { day: "Wednesday", time: "10am-2am" },
        { day: "Thursday", time: "10am-2am" },
        { day: "Friday", time: "10am-2am" },
        { day: "Saturday", time: "10am-2am" },
        { day: "Sunday", time: "10am-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 8.75, count: 10, isSpecial: false },
      { day: "Tuesday", price: 8.75, count: 10, isSpecial: false },
      { day: "Wednesday", price: 7, count: 10, isSpecial: true },
      { day: "Thursday", price: 8.75, count: 10, isSpecial: false },
      { day: "Friday", price: 8.75, count: 10, isSpecial: false },
      { day: "Saturday", price: 8.75, count: 10, isSpecial: false },
      { day: "Sunday", price: 8.75, count: 10, isSpecial: false }
    ]
  },
  {
    name: "Hudson Street Stackhouse",
    location: {
      streetLineOne: "2626 Hudson St.",
      city: {
        name: "Baltimore",
        neighborhood: "Canton"
      },
      state: "MD",
      zip: "21224",
      hours: [
        { day: "Monday", time: "3pm-2am", },
        { day: "Tuesday", time: "3pm-2am", },
        { day: "Wednesday", time: "3pm-2am", },
        { day: "Thursday", time: "3pm-2am", },
        { day: "Friday", time: "2pm-2am", },
        { day: "Saturday", time: "11am-2am", },
        { day: "Sunday", time: "11am-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 6, count: 10, isSpecial: true },
      { day: "Tuesday", price: 7.99, count: 10, isSpecial: false },
      { day: "Wednesday", price: 7.99, count: 10, isSpecial: false },
      { day: "Thursday", price: 7.99, count: 10, isSpecial: false },
      { day: "Friday", price: 7.99, count: 10, isSpecial: false },
      { day: "Saturday", price: 7.99, count: 10, isSpecial: false },
      { day: "Sunday", price: 7.99, count: 10, isSpecial: false }
    ]

  },
  {
    name: "Rocket to Venus",
    location: {
      streetLineOne: "3306 Chestnut Ave.",
      city: {
        name: "Baltimore",
        neighborhood: "Hampden"
      },
      state: "MD",
      zip: "21211",
      hours: [
        { day: "Monday", time: "5pm-11pm", },
        { day: "Tuesday", time: "5pm-11pm", },
        { day: "Wednesday", time: "5pm-11pm", },
        { day: "Thursday", time: "5pm-11pm", },
        { day: "Friday", time: "12pm-12am", },
        { day: "Saturday", time: "12pm-12am", },
        { day: "Sunday", time: "4pm-11pm" }
      ]
    },
    wings: [
      { day: "Monday", price: 12, count: 10, isSpecial: false },
      { day: "Tuesday", price: 5, count: 10, isSpecial: true },
      { day: "Wednesday", price: 12, count: 10, isSpecial: false },
      { day: "Thursday", price: 12, count: 10, isSpecial: false },
      { day: "Friday", price: 12, count: 10, isSpecial: false },
      { day: "Saturday", price: 12, count: 10, isSpecial: false },
      { day: "Sunday", price: 12, count: 10, isSpecial: false }
    ]

  },
  {
    name: "Frazier's on the Ave",
    location: {
      streetLineOne: "3306 Chestnut Ave.",
      city: {
        name: "Baltimore",
        neighborhood: "Hampden"
      },
      state: "MD",
      zip: "21211",
      hours: [
        { day: "Monday", time: "11am-2am", },
        { day: "Tuesday", time: "11am-2am", },
        { day: "Wednesday", time: "11am-2am", },
        { day: "Thursday", time: "11am-2am", },
        { day: "Friday", time: "11am-2am", },
        { day: "Saturday", time: "8am-2am", },
        { day: "Sunday", time: "8am-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 5, count: 10, isSpecial: true },
      { day: "Tuesday", price: 10, count: 10, isSpecial: false },
      { day: "Wednesday", price: 10, count: 10, isSpecial: false },
      { day: "Thursday", price: 10, count: 10, isSpecial: false },
      { day: "Friday", price: 10, count: 10, isSpecial: false },
      { day: "Saturday", price: 10, count: 10, isSpecial: false },
      { day: "Sunday", price: 10, count: 10, isSpecial: false }
    ]

  },
  {
    name: "DogWatch Tavern",
    location: {
      streetLineOne: "709 S. Broadway St.",
      city: {
        name: "Baltimore",
        neighborhood: "Fells Point"
      },
      state: "MD",
      zip: "21231",
      hours: [
        { day: "Monday", time: "11am-2am", },
        { day: "Tuesday", time: "11am-2am", },
        { day: "Wednesday", time: "11am-2am", },
        { day: "Thursday", time: "11am-2am", },
        { day: "Friday", time: "11am-2am", },
        { day: "Saturday", time: "11am-2am", },
        { day: "Sunday", time: "11am-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 11.95, count: 10, isSpecial: false },
      { day: "Tuesday", price: 11.95, count: 10, isSpecial: false },
      { day: "Wednesday", price: 11.95, count: 10, isSpecial: false },
      { day: "Thursday", price: 8, count: 10, isSpecial: true },
      { day: "Friday", price: 11.95, count: 10, isSpecial: false },
      { day: "Saturday", price: 11.95, count: 10, isSpecial: false },
      { day: "Sunday", price: 11.95, count: 10, isSpecial: false }
    ]
  },
  {
    name: "The Horse You Came In On Saloon",
    location: {
      streetLineOne: "1626 Thames St.",
      city: {
        name: "Baltimore",
        neighborhood: "Fells Point"
      },
      state: "MD",
      zip: "21231",
      hours: [
        { day: "Monday", time: "11am-1:30am", },
        { day: "Tuesday", time: "11am-1:30am", },
        { day: "Wednesday", time: "11am-1:30am", },
        { day: "Thursday", time: "11am-1:30am", },
        { day: "Friday", time: "11am-1:30am", },
        { day: "Saturday", time: "11am-1:30am", },
        { day: "Sunday", time: "11am-1:30am" }
      ]
    },
    wings: [
      { day: "Monday", price: 7.50, count: 10, isSpecial: true },
      { day: "Tuesday", price: 14, count: 10, isSpecial: false },
      { day: "Wednesday", price: 14, count: 10, isSpecial: false },
      { day: "Thursday", price: 14, count: 10, isSpecial: false },
      { day: "Friday", price: 14, count: 10, isSpecial: false },
      { day: "Saturday", price: 14, count: 10, isSpecial: false },
      { day: "Sunday", price: 14, count: 10, isSpecial: false }
    ]
  },
  {
    name: "Don't Know Tavern",
    location: {
      streetLineOne: "1453 Light St.",
      city: {
        name: "Baltimore",
        neighborhood: "Federal Hill"
      },
      state: "MD",
      zip: "21230",
      hours: [
        { day: "Monday", time: "4pm-2am", },
        { day: "Tuesday", time: "4pm-2am", },
        { day: "Wednesday", time: "11:30am-2am", },
        { day: "Thursday", time: "11:30am-2am", },
        { day: "Friday", time: "11:30am-2am", },
        { day: "Saturday", time: "10am-2am", },
        { day: "Sunday", time: "10am-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 11, count: 10, isSpecial: false },
      { day: "Tuesday", price: 11, count: 10, isSpecial: false },
      { day: "Wednesday", price: 5, count: 10, isSpecial: true },
      { day: "Thursday", price: 11, count: 10, isSpecial: false },
      { day: "Friday", price: 11, count: 10, isSpecial: false },
      { day: "Saturday", price: 11, count: 10, isSpecial: false },
      { day: "Sunday", price: 11, count: 10, isSpecial: false }
    ]

  },
  {
    name: "Nobles Bar & Grill",
    location: {
      streetLineOne: "1453 Light St.",
      city: {
        name: "Baltimore",
        neighborhood: "Federal Hill"
      },
      state: "MD",
      zip: "21230",
      hours: [
        { day: "Monday", time: "4pm-2am", },
        { day: "Tuesday", time: "4pm-2am", },
        { day: "Wednesday", time: "4pm-2am", },
        { day: "Thursday", time: "4pm-2am", },
        { day: "Friday", time: "4pm-2am", },
        { day: "Saturday", time: "12pm-2am", },
        { day: "Sunday", time: "12pm-2am" }
      ]
    },
    wings: [
      { day: "Monday", price: 11, count: 10, isSpecial: false },
      { day: "Tuesday", price: 7.50, count: 10, isSpecial: true },
      { day: "Wednesday", price: 11, count: 10, isSpecial: false },
      { day: "Thursday", price: 11, count: 10, isSpecial: false },
      { day: "Friday", price: 11, count: 10, isSpecial: false },
      { day: "Saturday", price: 11, count: 10, isSpecial: false },
      { day: "Sunday", price: 11, count: 10, isSpecial: false }
    ]
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
