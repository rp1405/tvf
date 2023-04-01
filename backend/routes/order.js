const express = require("express");
const router = express.Router();

const {
  getAllOrder,
  getAllTrueOrder,
  getAllFalseOrder,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");

router.route("/").get(getAllOrder).post(createOrder);
router.route("/true").get(getAllTrueOrder);
router.route("/false").get(getAllFalseOrder);
router.route("/:id").get(getOrder).patch(updateOrder).delete(deleteOrder);

module.exports = router;
