const Food = require("../models/food");

const getAllFood = async (req, res) => {
  const output = await Food.find({});
  res.status(200).json({ output });
};

const getAllTrueFood = async (req, res) => {
  const output = await Food.find({ availablity: true });
  res.status(200).json({ output });
};

const getAllFalseFood = async (req, res) => {
  const output = await Food.find({ availablity: false });
  res.status(200).json({ output });
};

const createFood = async (req, res) => {
  const task = await Food.create(req.body);
  res.status(201).json({ task });
};

const getFood = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Food.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
};

const deleteFood = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Food.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
};

const updateFood = async (req, res) => {
  const { id: taskID } = req.params;

  const job = await Food.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ job });
};

module.exports = {
  getAllFood,
  createFood,
  getFood,
  getAllFalseFood,
  getAllTrueFood,
  deleteFood,
  updateFood,
};
