import express from "express";
import {newProduct,allProducts} from '../controllers/productController.js';

const router = express.Router();
router.get("/allproducts", allProducts);
//router.get("/productbyid/:id", productById);
//router.get("/productbyname/:name", productByName);
//router.get("/productbycategory/:categoryId", productByCategoryId);
//router.get("/productbycountry/:country", productByCountry);
//router.get("/productbyexpirydate/:expirydate", productByExpiryDate);
// router.get(
//   "/productbymanufacturingdate/:manufacturingdate",
//   productByManufacturingDate
// );
//router.get("/productbydiscount/:discount", prodctByDiscount);
//router.get("/availableproducts/:available", availableProducts);
//router.get("/notavailableproducts/:available", notAvailableProducts);
router.post("/newproduct", newProduct);
//router.patch("/editproduct/:id", editProduct);
//router.delete("deleteproduct/:id", deleteProduct);

export default router;
