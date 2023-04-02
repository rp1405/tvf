const VerifiedOrder = require("../models/verifiedOrder");

const getAllTrueOrder = async (req, res) => {
  const output = await VerifiedOrder.find({ status: "pending" });
  res.status(200).json({ output });
};

module.exports = {
  getAllTrueOrder,
};
