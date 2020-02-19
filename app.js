import express from "express";

import helmet from "helmet";

import morgan from "morgan";

import mongoose from "mongoose";

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const articlesRoutes = require("./routes/articleRoutes");

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use("/api", articlesRoutes);
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
