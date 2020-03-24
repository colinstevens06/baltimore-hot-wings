const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");
if(process.env.NODE_ENV != 'production') {const dotenv = require('dotenv/config')};

// Matches with "/api/books"
router.route("/home")
  .get(restaurantsController.findAll)
// .post(restaurantsController.create);

// route to login page
router.post("/login", function(req, res) {
  console.log(req.auth);
  if(req.body.username === process.env.USER_ID) {
    if(req.body.pass === process.env.PASSWORD) {
      res.sendStatus(200);
    }
    else {
      res.sendStatus(500);
    }
  }
})

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
//   .put(restaurantsController.update)
//   .delete(restaurantsController.remove);

module.exports = router;
