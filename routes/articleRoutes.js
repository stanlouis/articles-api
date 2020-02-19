import express from "express";

import {
  getArticles,
  addNewArticle,
  deleteAllArticles,
  getArticleByTitle,
  updateArticleWithTitle,
  deleteArticleWithTitle
} from "../controllers/articleController";

const router = express.Router();

router
  .get("/articles", getArticles)
  .post("/articles", addNewArticle)
  .delete("/articles", deleteAllArticles)
  .get("/articles/:articleTitle", getArticleByTitle)
  .put("/articles/:articleTitle", updateArticleWithTitle)
  .delete("/articles/:articleTitle", deleteArticleWithTitle);

module.exports = router;
