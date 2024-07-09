import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router.post('/product', productController.createProduct);
router.get('/product', productController.getAllProduct);
router.get('/product/:productId', productController.getProductById);
router.put('/product/:productId', productController.getProductByIdAndUpdate);
router.delete(
  '/product/:productId',
  productController.getProductByIdAndDelete,
);

export const productRouter = router;
