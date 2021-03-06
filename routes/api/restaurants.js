const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");
if (process.env.NODE_ENV != 'production') { const dotenv = require('dotenv/config') };

// Matches with "/api/restaurants"
router.route("/")
  .get(restaurantsController.findAll)
// .post(restaurantsController.create);

// Matches with "/api/restaurants"
router.route("/admin")
  .get(restaurantsController.getStoreID);

//return the state list for our drop down
router.route("/dlState")
  .get(restaurantsController.getStates);

// route to login page
router.post("/login", function (req, res) {
  //set a local variable up for usage.
  let request = req.body;

  //check against our env data
  if (request.body.username === process.env.USER_ID) {
    if (request.body.password === process.env.PASSWORD) {
      res.sendStatus(200);
    }
    else {
      res.sendStatus(500);
    }
  }
  else {
    res.sendStatus(500);
  }
})

// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)

module.exports = router;
