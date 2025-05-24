import express from 'express';

import { getArticles, getArticlesById, createArticle, editArticle, deleteArticle } from "../controllers/articlesController.js";

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticlesById);
router.post("/", createArticle);
router.put("/:id", editArticle);
router.delete("/:id", deleteArticle);

export default router;