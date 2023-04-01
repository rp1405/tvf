const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "order amount must be provided"],
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  items: {
    type: Object,
    required: [true, "order amount must be provided"],
  },
});

module.exports = mongoose.model("Order", orderSchema);
