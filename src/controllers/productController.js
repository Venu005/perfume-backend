import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  try {
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

    // Add validation for image URLs
    product.images = product.images.filter((img) => {
      try {
        new URL(img);
        return true;
      } catch {
        return false;
      }
    });

    res.json(product);
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid product ID format");
    }
    throw error;
  }
});
