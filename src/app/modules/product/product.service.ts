import { IProduct } from "./product.interface";
import { Product } from "./product.model";


//  send Product data in database
const createPrductIntoDB = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;

};

// Retrived all product data from database

const getAllPrductIntoDB = async () => {
  const result = await Product.find({ isDeleted: { $ne: true } });
  return result;

};

//  find Product by database id
const getProductByIdIntoDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
//  find Product by database id and update product
const getProductByIdAndUpdateIntoDB = async (id: string, data: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

//  find Product by database id
const getProductByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return result;
};

export const productService = {
  createPrductIntoDB,
  getAllPrductIntoDB,
  getProductByIdIntoDB,
  getProductByIdAndDeleteIntoDB,
  getProductByIdAndUpdateIntoDB,
};
