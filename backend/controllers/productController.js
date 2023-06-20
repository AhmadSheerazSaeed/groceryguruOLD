import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";


export const allProducts = async(reqc)
export const newProduct = async (req, res) => {
  try {
    const createdProduct = await Product.create({
      categoryId: req.body.categoryId,
      itemName: req.body.itemName,
      imageUrl: req.body.imageUrl,
      itemDescription: req.body.itemDescription,
      itemsQuantity: req.body.itemsQuantity,
      purchasePrice: req.body.purchasePrice,
      salePrice: req.body.salePrice,
      discount: req.body.discount,
      countryOfOrigin: req.body.countryOfOrigin,
      manufacturingDate: req.body.manufacturingDate,
      expiryDate: req.body.expiryDate,
      dateUpdated: req.body.dateUpdated,
      available: req.body.available,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "product created", createdProduct });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export default { newProduct };
