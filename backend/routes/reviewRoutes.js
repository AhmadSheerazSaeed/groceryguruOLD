import express from "express";
import { newReview } from "../controllers/reviewController.js";

const router = express.Router();
//router.get("/allreviews",allReviews)
//router.get("/reviewsbyproduct/:id",reviewsByProduct)
//router.get("/reviewsbycategory/:categoryid",reviewsByCategory)
//router.get("/productrating/:productid", productRating)
router.post("/newreview",newReview)
//router.patch("/editreview/:id",editReview)
//router.delete("/deletereview/:id",deleteReview)
export default router;