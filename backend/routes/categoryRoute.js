import express from 'express';
import { newCategory } from '../controllers/categoryController.js';

const router = express.Router();
router.post('/createNewCategory', newCategory)



export default router;