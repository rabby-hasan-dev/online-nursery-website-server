import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { IOrder } from './order.interface';
import { Order } from './order.model';
import { Product } from '../product/product.model';

//  send order data in database
const createOrderIntoDB = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;
};

// Retrived all order data from database
const getAllOrderIntoDB = async () => {
  const result = await Order.find({ isCancel: { $ne: true } }).populate({
    path: 'productId',
    populate: {
      path: 'category',
    },
  });
  return result;
};

//  find order by database id
const getOrderByIdIntoDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};
//  find Order by database id and update Order
const getOrderByIdAndUpdateIntoDB = async (
  id: string,
  payload: Partial<IOrder>,
) => {
  // Fetch the current order
  const currentOrder = await Order.findById(id);

  if (!currentOrder) {
    throw new AppError(httpStatus.NOT_FOUND, 'Order not found');
  }

  // Check if quantity or product is being updated
  if (payload.quantity || payload.productId) {
    const productId = payload.productId || currentOrder.productId;
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    // Use updated quantity if provided, otherwise use current quantity
    const quantity = payload.quantity || currentOrder.quantity;
    payload.totalPrice = product.price * quantity;
  }

  const result = await Order.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Order not found');
  }
  return result;
};

//  find Order by database id
const getOrderByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Order.findByIdAndUpdate(
    id,
    { isCanceled: true },
    { new: true },
  );
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Order not found');
  }
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getOrderByIdIntoDB,
  getOrderByIdAndDeleteIntoDB,
  getOrderByIdAndUpdateIntoDB,
};
