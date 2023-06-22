import { StatusCodes } from "http-status-codes";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const deleteProduct = async (req, res) => {
  try {
    const productIdToDelete = await Product.findByIdAndDelete({
      id: req.params.id,
    });
    //we need to match it with the productID in card?

    if(!productIdToDelete){
      return res.status(StatusCodes.NOT_FOUND).json("product not found");
    }
    return res.status(StatusCodes.OK).json({message:"prodict deleted",deleteProduct:productIdToDelete})
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const deleteCart = async (req, res) => {
  try {
    const cartToDelete = await Cart.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!cartToDelete) {
      return res.status(StatusCodes.NOT_FOUND).json("cart not found");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "cart deleted", deleteCart: cartToDelete });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export const createCart = async (req, res) => {
  try {
    const createdCart = await Cart.create({
      customerId: req.body.customerId,
      items: req.body.items,
    });
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "cart item created", createdCart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};

export default { createCart,deleteCart,deleteProduct };
