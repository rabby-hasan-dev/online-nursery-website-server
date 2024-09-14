import express from 'express';
import { orderController } from './order.controller';
import validateRequest from '../../middleware/validateRequest';
import { OrderValidation } from './order.zodValidation';

const router = express.Router();

router.post(
  '/',
  validateRequest(OrderValidation.createOrderSchema),
  orderController.createOrder,
);
router.get('/', orderController.getAllOrder);
router.get('/:orderId', orderController.getOrderById);
router.put(
  '/:orderId',
  validateRequest(OrderValidation.updateOrderSchema),
  orderController.getOrderByIdAndUpdate,
);
router.delete('/:orderId', orderController.getOrderByIdAndDelete);

export const orderRouter = router;
