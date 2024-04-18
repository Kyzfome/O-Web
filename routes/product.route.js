const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.post("/:id", updateProduct);

router.post("/:id", deleteProduct);

module.exports = router;