const Category = require("../models/category");

const getAllCategory = async (req, res) => {
  const output = await Category.find({});
  res.status(200).json({ output });
};

const getAllTrueCategory = async (req, res) => {
  const output = await Category.find({ availablity: true });
  res.status(200).json({ output });
};

const getAllFalseCategory = async (req, res) => {
  const output = await Category.find({ availablity: false });
  res.status(200).json({ output });
};

const createCategory = async (req, res) => {
  const task = await Category.create(req.body);
  res.status(201).json({ task });
};

const getCategory = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Category.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
};

const deleteCategory = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Category.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
};

const updateCategory = async (req, res) => {
  const { id: taskID } = req.params;

  const job = await Category.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ job });
};

module.exports = {
  getAllCategory,
  createCategory,
  getCategory,
  getAllFalseCategory,
  getAllTrueCategory,
  deleteCategory,
  updateCategory,
};
