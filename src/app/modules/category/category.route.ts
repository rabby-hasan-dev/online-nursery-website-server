import express from 'express';
import { CategoryController } from './category.controller';
import { CategoryZodValidator } from './category.zodValidation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post('/',validateRequest(CategoryZodValidator.CategoryValidationSchema), CategoryController.createCategory);
router.get('/', CategoryController.getAllCategory);
router.get('/:categoriesId', CategoryController.getCategoryById);
router.put('/:categoriesId', validateRequest(CategoryZodValidator.CategoryUpdateValidationSchema), CategoryController.getCategoryByIdAndUpdate);
router.delete('/:categoriesId', CategoryController.getCategoryByIdAndDelete);

export const categoryRouter = router;
