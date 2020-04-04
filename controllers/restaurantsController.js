const db = require("../models");
if(process.env.NODE_ENV != 'production') {const dotenv = require('dotenv/config')};

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Restaurant
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: (req, res) => {
    db.Restaurant
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
  },
  getStoreID: function (req, res) {
    let storeResponse = {
      storeID: process.env.STORE_ID
    }

    res.json(storeResponse);
  },
  getStates: function (req, res) {
    
    res.json(db.States);
  }
};
