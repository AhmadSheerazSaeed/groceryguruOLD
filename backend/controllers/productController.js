import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";
export const productById = async (req, res) => {
  try {
    const productId = await Product.findById(req.params.id);

    if (!productById) {
      return res.status(StatusCodes.NOT_FOUND).json("product not found");
    }
    return res.status(StatusCodes.NOT_FOUND).json(productId);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const productByName = async (req, res) => {
  try {
    const productName = await Product.findOne({
      itemName: req.params.itemName,
    });

    if (!productByName) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json("product not found or check the spelling");
    }
    return res.status(StatusCodes.OK).json(productName);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const allProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const prodctByDiscount = async (req,res)=>{
  try {
    const productDiscoutNumber = await Product.findOne({
      discount:req.params.discount
    })
    if(!productDiscoutNumber){
      return res.status(StatusCodes.NOT_FOUND).json("no discount number for the product");
    }
    return res.status(StatusCodes.OK).json(productDiscoutNumber)
  } catch (error) {
    return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: error.toString() });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const productIdToDelete = await Product.findByIdAndDelete({
      id: req.params.id,
    });

    if (!productIdToDelete) {
      return res.status(StatusCodes.NOT_FOUND).json("product not found");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "prodict deleted", deleteProduct: productIdToDelete });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
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

export default { newProduct, deleteProduct,prodctByDiscount, productById,productByName };
