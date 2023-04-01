const express = require("express");
const router = express.Router();

const {
  getAllFood,
  getAllTrueFood,
  getAllFalseFood,
  getFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/food");

router.route("/").get(getAllFood).post(createFood);
router.route("/true").get(getAllTrueFood);
router.route("/false").get(getAllFalseFood);
router.route("/:id").get(getFood).patch(updateFood).delete(deleteFood);

module.exports = router;
