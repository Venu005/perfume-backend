import Review from "../models/review.js";
import asyncHandler from "express-async-handler";
import Product from "../models/product.js";
export const getProductReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ product: req.params.productId }).populate(
    "user",
    "name"
  );
  res.json(reviews);
});

export const createReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  // Create session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const review = await Review.create(
      [
        {
          user: req.user._id,
          product: req.params.productId,
          rating,
          comment,
        },
      ],
      { session }
    );

    await Product.findByIdAndUpdate(
      req.params.productId,
      { $push: { reviews: review[0]._id } },
      { session, new: true }
    );

    await session.commitTransaction();
    res.status(201).json(review[0]);
  } catch (error) {
    await session.abortTransaction();
    res.status(500);
    throw new Error("Failed to create review");
  } finally {
    session.endSession();
  }
});
