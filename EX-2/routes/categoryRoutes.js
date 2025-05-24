import express from 'express';
import { getCategories, getCategoryById, createCategory, editCategory, deleteCategory, getArticlesByCategoryId } from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);
router.get("/:id/articles", getArticlesByCategoryId);

export default router;
