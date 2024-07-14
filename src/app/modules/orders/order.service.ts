import { IOrder } from "./order.interface";
import { Order } from "./order.model";



//  send order data in database
const createOrderIntoDB = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;
  console.log(order);
  //  Validate Product Existence and Inventory Level (Atomic Operation)
  // const product = await Product.findOne({ _id: order.productId }).lean();
  // // Lean for performance

  // if (!product) {
  //   throw new Error('Product does not exist!');
  // }

  // if (product.stock < order.quantity) {
  //   throw new Error('Insufficient quantity available in stock');
  // }

  // //  Decrement Inventory Level and Create Order (Transaction)
  // const session = await Product.startSession();
  // session.startTransaction();

  // try {
  //   const updatedQuantity = product.stock - order.quantity;
  //   await Product.updateOne(
  //     { _id: product._id },
  //     { $set: { stock: updatedQuantity } },
  //     { session } // Include session for transaction
  //   );

  //   const newOrder = await Order.create(order, { session }); // Include session for transaction
  //   await session.commitTransaction();
  //   return newOrder;

  // } catch (error) {
  //   await session.abortTransaction();
  //   throw error; // Re-throw the error for proper handling
  // } finally {
  //   session.endSession(); // Release the session even on errors
  // }






};

// Retrived all order data from database

const getAllOrderIntoDB = async () => {
  const result = await Order.find({ isCancel: { $ne: true } }).populate({
    path: 'productId',
    populate: {
      path: "category"
    }
  });
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
