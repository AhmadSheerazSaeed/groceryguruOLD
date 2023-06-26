import express from "express";
import {
  createCustomer,
  allCustomer,
  customerById,
  customerLogin,
  customerLogout,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/createcustomer", createCustomer);

router.get("/allcustomer", allCustomer);
router.get("/customer/:id", customerById);

router.post("/customerlogin", customerLogin);
router.get("/customerlogout", customerLogout);

router.patch("/customer/:id", updateCustomer);

router.delete("/customer/:id", deleteCustomer);

export default router;
