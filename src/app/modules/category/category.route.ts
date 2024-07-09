import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/', CategoryController.createCategory);
router.get('/', CategoryController.getAllCategory);
router.get('/:categoriesId', CategoryController.getCategoryById);
router.put('/:categoriesId', CategoryController.getCategoryByIdAndUpdate);
router.delete('/:categoriesId', CategoryController.getCategoryByIdAndDelete);

export const categoryRouter = router;
