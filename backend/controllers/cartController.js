import { StatusCodes } from "http-status-codes";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";


export const updateCartProductQuantity = async (req,res)=>{
  const customerId = req.body.customerId;
  const productId = req.body.productId;
  const quantityChange = req.body.quantityChange;

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      {customerId:customerId,"items.productId":productId},
      {$inc:{"items.$.quantity": quantityChange}},
      {new:true}
    )
    if (!updatedCart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json("Product not found or no customer ID");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "Product quantity updated", updatedCart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
}

export const deleteProduct = async (req, res) => {
  const customerId = req.body.customerId;
  const productId = req.body.productId;
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { customerId: customerId },
      { $pull: { items: { productId: productId } } },
      //The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
      { new: true } 
    );
    if (!updatedCart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json("product not found or no customer id");
    }
    return res
      .status(StatusCodes.OK)
      .json({ message: "product deleted", deleteProduct: productId });
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

export default { createCart, updateCartProductQuantity,deleteCart, deleteProduct };
