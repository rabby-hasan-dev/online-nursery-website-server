import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { productController } from './product.controller';
import { productZodValidator } from './product.zodValidation';

const router = express.Router();

router.post('/', validateRequest(productZodValidator.ProductValidationSchema), productController.createProduct);
router.get('/', productController.getAllProduct);
router.get('/singleProduct/:productId', productController.getProductById);
router.put('/:productId', validateRequest(productZodValidator.UpdateProductValidationSchema), productController.getProductByIdAndUpdate);
router.delete(
  '/:productId',
  productController.getProductByIdAndDelete,
);

export const productRouter = router;
