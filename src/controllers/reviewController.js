import Review from "../models/review.js";
import asyncHandler from "express-async-handler";

export const getProductReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ product: req.params.productId }).populate(
    "user",
    "name"
  );
  res.json(reviews);
});

export const createReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const review = await Review.create({
    user: req.user._id,
    product: req.params.productId,
    rating,
    comment,
  });

  // Add review to product's reviews array
  await Product.findByIdAndUpdate(
    req.params.productId,
    { $push: { reviews: review._id } },
    { new: true }
  );

  res.status(201).json(review);
});
