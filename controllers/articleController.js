import mongoose from "mongoose";
import { articleSchema } from "../models/article";

const Article = mongoose.model("Article", articleSchema);

export const getArticles = (req, res) => {
  Article.find({}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send("No articles matching that title was found.");
    }
  });
};

export const addNewArticle = (req, res) => {
  Article.create(req.body)
    .then(doc => res.send(doc))
    .catch(err => res.status(400).send(err));
};

export const deleteAllArticles = (req, res) => {
  Article.deleteMany({})
    .then(() => {
      res.send("Successfully deleted all articles");
    })
    .catch(e => res.send(e));
};

export const getArticleByTitle = (req, res) => {
  const { articleTitle } = req.params;
  Article.findOne(
    { title: { $regex: new RegExp(articleTitle, "i") } },
    (err, result) => {
      if (!err) {
        res.send(result);
      } else {
        res.send("No articles matching that title was found.");
      }
    }
  );
};

export const updateArticleWithTitle = (req, res) => {
  const { articleTitle: title } = req.params;
  Article.update(
    { title: { $regex: new RegExp(title, "i") } },
    { $set: req.body },
    err => {
      if (!err) {
        res.send("Successfully updated article.");
      } else {
        res.send(err);
      }
    }
  );
};

export const deleteArticleWithTitle = (req, res) => {
  const { articleTitle: title } = req.params;
  Article.findOneAndDelete(
    { title: { $regex: new RegExp(title, "i") } },
    err => {
      if (!err) {
        res.send("Successfully deleted the corresponding article.");
      } else {
        res.send(err);
      }
    }
  );
};
