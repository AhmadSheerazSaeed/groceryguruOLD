import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "customer" },
  productId: { type: Schema.Types.ObjectId, ref: "product" },
  rating: String,
  comment: String,
  dateOfReview: Date,
});

const Review = model("review", reviewSchema);
export default Review;
