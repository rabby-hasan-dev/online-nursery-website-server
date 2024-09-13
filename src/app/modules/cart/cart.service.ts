import { IOrder } from "./order.interface";
import { Order } from "./order.model";



//  send order data in database
const createCartIntoDB = async (Cart: ICart) => {
  const result = await Cart.create(Cart);
  return result;




};

// Retrived all Cart data from database

const getAllCartIntoDB = async () => {
  const result = await Cart.find({ isCancel: { $ne: true } }).populate({
    path: 'productId',
    populate: {
      path: "category"
    }
  });
  return result;

};

//  find Cart by database id
const getCartByIdIntoDB = async (id: string) => {
  const result = await Cart.findById(id);
  return result;
};
//  find Cart by database id and update Cart
const getCartByIdAndUpdateIntoDB = async (id: string, data: Partial<ICart>) => {
  const result = await Cart.findByIdAndUpdate(id, data, { new: true });
  return result;
};

//  find Cart by database id
const getCartByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Cart.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return result;
};

export const cartService = {
  createCartIntoDB,
  getAllCartIntoDB,
  getCartByIdIntoDB,
  getCartByIdAndDeleteIntoDB,
  getCartByIdAndUpdateIntoDB,
};
