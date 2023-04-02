const VerifiedOrder = require("../models/verifiedOrder");

const getAllTrueOrder = async (req, res) => {
  const output = await VerifiedOrder.find({ status: "pending" });
  res.status(200).json({ output });
};

const updateOrder = async (req, res) => {
  const { id: taskID } = req.params;

  const task = await VerifiedOrder.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
};

module.exports = {
  getAllTrueOrder,
  updateOrder,
};
