import express from 'express';
import { newCustomer } from '../controllers/customerController.js';

const router = express.Router();
router.post('/createNewCustomer', newCustomer)



export default router;