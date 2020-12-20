import express from "express";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  console.log(product, "============================================");
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found " });
  }
});
