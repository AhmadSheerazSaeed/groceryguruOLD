import { StatusCodes } from "http-status-codes";
import Cart from "../models/Cart.js";

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
