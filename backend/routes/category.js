const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  getAllTrueCategory,
  getAllFalseCategory,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category");

router.route("/").get(getAllCategory).post(createCategory);
router.route("/true").get(getAllTrueCategory);
router.route("/false").get(getAllFalseCategory);
router
  .route("/:id")
  .get(getCategory)
  .delete(deleteCategory)
  .patch(updateCategory);

module.exports = router;
