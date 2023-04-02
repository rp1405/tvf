const express = require("express");
const router = express.Router();

const { getAllTrueOrder } = require("../controllers/order.js");

router.route("/true").get(getAllTrueOrder);

module.exports = router;
