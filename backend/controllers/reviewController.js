import { StatusCodes } from "http-status-codes";
import Review from "../models/Review.js";

export const allReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(StatusCodes.OK).json(reviews);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const newReview = async (req, res) => {
  try {
    const createdReview = await Review.create({
      customerId: req.body.customerId,
      productId: req.body.productId,
      rating: req.body.rating,
      comment: req.body.comment,
      dateOfReview: req.body.dateOfReview,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "review created", createdReview });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const reviewsByProduct = async (req, res) => {
  try {
    const productIdToRewiew = await Review.findById({
      productId: req.params.productId,
    });
    if (!productIdToRewiew) {
      return res.status(StatusCodes.NOT_FOUND).json("product Id not found");
    }
    return res.status(StatusCodes.OK).json(productIdToRewiew);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const editReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      {
        customerId: req.body.customerId,
        productId: req.body.productId,
        rating: req.body.rating,
        comment: req.body.comment,
        dateOfReview: req.body.dateOfReview,
      },
      { new: true }
    );
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove({
      _id: req.params.id,
    });
    if (!review) {
      return res.status(StatusCodes.NOT_FOUND).json("review not found");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "rewiew deleted", deleteReview: review });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export default { allReviews, newReview, editReview,reviewsByProduct, deleteReview };
