import express from "express";
import {createCart} from '../controllers/cartController.js'
const router = express.Router();

router.post("/createcard", createCart)
//router.patch("/editproductquantity/productid/:id/productquantity/:quantity/cartid/:id",updateCart)
//router.patch("/deleteproduct /:id", deleteProduct)

//router.delete("/deletecart/:id", deleteCart)


export default router;