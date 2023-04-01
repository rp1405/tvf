const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide food name"],
  },
  price: {
    type: Number,
    required: [true, "food price must be provided"],
  },
  availablity: {
    type: Boolean,
    default: false,
  },
  veg: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Food", foodSchema);
