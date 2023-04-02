const express = require("express");
const router = express.Router();

const { getAllTrueFood } = require("../controllers/food");

router.route("/true").get(getAllTrueFood);
module.exports = router;
