import express from 'express';
import { getJournalists, getJournalistById, createJournalist, editJournalist, deleteJournalist, getArticlesByJournalistId } from "../controllers/JournalistRoutes.js";

const router = express.Router();

router.get("/", getJournalists);
router.get("/:id", getJournalistById);
router.post("/", createJournalist);
router.put("/:id", editJournalist);
router.delete("/:id", deleteJournalist);
router.get("/:id/articles", getArticlesByJournalistId);

export default router;
