const mongoose = require("mongoose");

const verifiedOrderSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: [true, "order amount must be provided"],
  },
  cust_order_id: {
    type: Number,
    required: [true, "order amount must be provided"],
  },
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

module.exports = mongoose.model("VerifiedOrder", verifiedOrderSchema);
