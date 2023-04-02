const Food = require("../models/food");

const getAllTrueFood = async (req, res) => {
  const output = await Food.find({ availablity: true });
  res.status(200).json({ output });
};

module.exports = {
  getAllTrueFood,
};
