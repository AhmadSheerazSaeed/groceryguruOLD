import express from "express";
import {createCart,updateCartProductQuantity,deleteCart,deleteProduct} from '../controllers/cartController.js'
const router = express.Router();

router.post("/createcard", createCart)
router.patch("/editproductquantity/productid/:id/productquantity/:quantity/cartid/:id",updateCartProductQuantity)
router.patch("/deleteproduct /:id", deleteProduct)

router.delete("/deletecart/:id", deleteCart)


export default router;