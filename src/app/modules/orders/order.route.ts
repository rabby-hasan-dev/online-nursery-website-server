import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrder);
router.get('/:orderId', orderController.getOrderById);
router.put('/:orderId', orderController.getOrderByIdAndUpdate);
router.delete(
  '/:orderId',
  orderController.getOrderByIdAndDelete,
);

export const orderRouter = router;
