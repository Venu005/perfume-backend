import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "user",
        select: "name email",
      },
    })
    .lean();

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  

  res.json(product);
});
