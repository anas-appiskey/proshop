import express from "express";
import { getAllProducts, getByID } from "../controller/productController.js";
const router = express.Router();

// @desc    Fetch all
// @route   GET /api/products
// @access  public
router.get("/", getAllProducts);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  public
router.get("/:id", getByID);

export default router;
