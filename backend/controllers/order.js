const Order = require("../models/order");

const getAllOrder = async (req, res) => {
  const output = await Order.find({});
  res.status(200).json({ output });
};

const getAllTrueOrder = async (req, res) => {
  const output = await Order.find({ status: "pending" });
  res.status(200).json({ output });
};

const getAllFalseOrder = async (req, res) => {
  const output = await Order.find({ status: "completed" });
  res.status(200).json({ output });
};

const createOrder = async (req, res) => {
  const task = await Order.create(req.body);
  res.status(201).json({ task });
};

const getOrder = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Order.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
};

const deleteOrder = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Order.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
};

const updateOrder = async (req, res) => {
  const { id: taskID } = req.params;

  const job = await Order.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ job });
};

module.exports = {
  getAllOrder,
  createOrder,
  getOrder,
  getAllFalseOrder,
  getAllTrueOrder,
  deleteOrder,
  updateOrder,
};
