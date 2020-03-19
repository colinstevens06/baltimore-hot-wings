const router = require("express").Router();
const restaurantRoutes = require("./restaurants");

// Book routes
router.use("/books", restaurantRoutes);

module.exports = router;
