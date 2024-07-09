import { IOrder } from "./order.interface";
import { Order } from "./order.model";



//  send order data in database
const createOrderIntoDB = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;

};

// Retrived all order data from database

const getAllOrderIntoDB = async () => {
  const result = await Order.find({ isCancel: { $ne: true } });
  return result;

};

//  find order by database id
const getOrderByIdIntoDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};
//  find Order by database id and update Order
const getOrderByIdAndUpdateIntoDB = async (id: string, data: Partial<IOrder>) => {
  const result = await Order.findByIdAndUpdate(id, data, { new: true });
  return result;
};

//  find Order by database id
const getOrderByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Order.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getOrderByIdIntoDB,
  getOrderByIdAndDeleteIntoDB,
  getOrderByIdAndUpdateIntoDB,
};
