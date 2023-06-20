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

export default { allReviews, newReview };
