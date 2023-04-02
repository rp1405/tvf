const express = require("express");
const router = express.Router();

const { getAllTrueOrder, updateOrder } = require("../controllers/order.js");

router.route("/true").get(getAllTrueOrder);
router.route("/:id").patch(updateOrder);

module.exports = router;
