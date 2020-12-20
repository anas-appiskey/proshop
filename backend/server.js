import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
// const bodyParser = require("body-parser");

// const mongoose = require("mongoose");

// const cors = require("cors");

// const postRouter = require("./routes/posts");

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api running ");
});

app.use("/api/products", productRoutes);

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port : ${PORT}`)
);
