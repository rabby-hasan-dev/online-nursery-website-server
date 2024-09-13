import express from 'express';

import { cartController } from './cart.controller';

const router = express.Router();

router.post('/', cartController.createCart);
router.get('/', cartController.getAllCart);
router.get('/:cartId', cartController.getCartById);
router.put('/:cartId', cartController.getCartByIdAndUpdate);
router.delete(
  '/:cartId',
  cartController.getCartByIdAndDelete,
);

export const cartRouter = router;
