const router = require("express").Router();
const restaurantRoutes = require("./restaurants");

// Restaurants routes
router.use("/restaurants", restaurantRoutes);

module.exports = router;
