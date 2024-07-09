import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProduct);
router.get('/:productId', productController.getProductById);
router.put('/:productId', productController.getProductByIdAndUpdate);
router.delete(
  '/:productId',
  productController.getProductByIdAndDelete,
);

export const productRouter = router;
