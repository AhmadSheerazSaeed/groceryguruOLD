import { Schema, model } from "mongoose";

const productSchema = new Schema({
  categoryId: { type: Schema.Types.ObjectId, ref: "category" }, //check the name category
  itemName: { type: String, required: true },
  imageUrl: String,
  itemDescription: String,
  itemsQuantity: Number,
  purchasePrice: Number,
  salePrice: { type: Number, required: true },
  discount: Number,
  countryOfOrigin: { type: String, required: true },
  manufacturingDate: Date,
  expiryDate: Date,
  dateUpdated: Date,
  available: Boolean,
});

const Product = model("product ", productSchema);
export default Product;
