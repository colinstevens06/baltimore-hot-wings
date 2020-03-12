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
      streetLineOne: "901 S. Clinton St.",
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
        Monday: { price: 12, count: 12 },
        Tuesday: { price: 12, count: 12 },
        Wednesday: { price: 12, count: 12 },
        Thursday: { price: 12, count: 12 },
        Friday: { price: 12, count: 12 },
        Saturday: { price: 12, count: 12 },
        Sunday: { price: 12, count: 12 },
      }
    }
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
        Tuesday: { price: 10, count: 10 },
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
      streetLineOne: "2819 Eastern Ave.",
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
        Sunday: { price: 8.75, count: 10 }
      }
    }
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
      hours: {
        Monday: "3pm-2am",
        Tuesday: "3pm-2am",
        Wednesday: "3pm-2am",
        Thursday: "3pm-2am",
        Friday: "2pm-2am",
        Saturday: "11am-2am",
        Sunday: "11am-2am"
      },
      wings: {
        Monday: { price: 6, count: 10, isSpecial: true },
        Tuesday: { price: 7.99, count: 10 },
        Wednesday: { price: 7.99, count: 10 },
        Thursday: { price: 7.99, count: 10 },
        Friday: { price: 7.99, count: 10 },
        Saturday: { price: 7.99, count: 10 },
        Sunday: { price: 7.99, count: 10 }
      }
    }
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
      hours: {
        Monday: "5pm-11pm",
        Tuesday: "5pm-11pm",
        Wednesday: "5pm-11pm",
        Thursday: "5pm-11pm",
        Friday: "12pm-12am",
        Saturday: "12pm-12am",
        Sunday: "4pm-11pm"
      },
      wings: {
        Monday: { price: 12, count: 10 },
        Tuesday: { price: 5, count: 10, isSpecial: true },
        Wednesday: { price: 12, count: 10 },
        Thursday: { price: 12, count: 10 },
        Friday: { price: 12, count: 10 },
        Saturday: { price: 12, count: 10 },
        Sunday: { price: 12, count: 10 }
      }
    }
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
      hours: {
        Monday: "11am-2am",
        Tuesday: "11am-2am",
        Wednesday: "11am-2am",
        Thursday: "11am-2am",
        Friday: "11am-2am",
        Saturday: "8am-2am",
        Sunday: "8am-2am"
      },
      wings: {
        Monday: { price: 5, count: 10, isSpecial: true },
        Tuesday: { price: 10, count: 10 },
        Wednesday: { price: 10, count: 10 },
        Thursday: { price: 10, count: 10 },
        Friday: { price: 10, count: 10 },
        Saturday: { price: 10, count: 10 },
        Sunday: { price: 10, count: 10 }
      }
    }
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
      hours: {
        Monday: "11am-2am",
        Tuesday: "11am-2am",
        Wednesday: "11am-2am",
        Thursday: "11am-2am",
        Friday: "11am-2am",
        Saturday: "11am-2am",
        Sunday: "11am-2am"
      },
      wings: {
        Monday: { price: 11.95, count: 10 },
        Tuesday: { price: 11.95, count: 10 },
        Wednesday: { price: 11.95, count: 10 },
        Thursday: { price: 8, count: 10, isSpecial: true },
        Friday: { price: 11.95, count: 10 },
        Saturday: { price: 11.95, count: 10 },
        Sunday: { price: 11.95, count: 10 }
      }
    }
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
      hours: {
        Monday: "11am-1:30am",
        Tuesday: "11am-1:30am",
        Wednesday: "11am-1:30am",
        Thursday: "11am-1:30am",
        Friday: "11am-1:30am",
        Saturday: "11am-1:30am",
        Sunday: "11am-1:30am"
      },
      wings: {
        Monday: { price: 7.50, count: 10, isSpecial: true },
        Tuesday: { price: 14, count: 10 },
        Wednesday: { price: 14, count: 10 },
        Thursday: { price: 14, count: 10 },
        Friday: { price: 14, count: 10 },
        Saturday: { price: 14, count: 10 },
        Sunday: { price: 14, count: 10 }
      }
    }
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
      hours: {
        Monday: "4pm-2am",
        Tuesday: "4pm-2am",
        Wednesday: "11:30am-2am",
        Thursday: "11:30am-2am",
        Friday: "11:30am-2am",
        Saturday: "10am-2am",
        Sunday: "10am-2am"
      },
      wings: {
        Monday: { price: 11, count: 10 },
        Tuesday: { price: 11, count: 10 },
        Wednesday: { price: 5, count: 10, isSpecial: true },
        Thursday: { price: 11, count: 10 },
        Friday: { price: 11, count: 10 },
        Saturday: { price: 11, count: 10 },
        Sunday: { price: 11, count: 10 }
      }
    }
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
      hours: {
        Monday: "4pm-2am",
        Tuesday: "4pm-2am",
        Wednesday: "4pm-2am",
        Thursday: "4pm-2am",
        Friday: "4pm-2am",
        Saturday: "12pm-2am",
        Sunday: "12pm-2am"
      },
      wings: {
        Monday: { price: 11, count: 10 },
        Tuesday: { price: 7.50, count: 10, isSpecial: true },
        Wednesday: { price: 11, count: 10 },
        Thursday: { price: 11, count: 10 },
        Friday: { price: 11, count: 10 },
        Saturday: { price: 11, count: 10 },
        Sunday: { price: 11, count: 10 }
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
