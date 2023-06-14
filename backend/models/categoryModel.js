import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categoryName: { type: String, required: true },
  imageUrl: { type: String },
  details: { type: String },
  discount: { type: String },
});

const Category = model("category", categorySchema);

export default Category;
