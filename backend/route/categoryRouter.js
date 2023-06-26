import express from "express";
import {
  allCategories,
  categoryById,
  categoryName,
  newCategory,
  editCategory,
  deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/allcategories", allCategories);
router.get("/categorybyid/:id", categoryById);
router.get("/categorybyname/:name", categoryName);
// router.get("/categoryproductid/:id", categoryByProduct);

router.post("/createcategory", newCategory);

router.patch("/editcategory/:id", editCategory);

router.delete("/deleteccategory/:id", deleteCategory);

export default router;
