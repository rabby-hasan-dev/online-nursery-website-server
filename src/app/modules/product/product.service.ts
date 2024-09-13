import QueryBuilder from "../../builder/QueryBuilder";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";


//  send Product data in database
const createPrductIntoDB = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;

};

// Retrived all product data from database

const getAllPrductIntoDB = async (query: Record<string, unknown>) => {
  // const result = await Product.find({ isDeleted: { $ne: true } });
  // return result;

  const productSearchableField = ["title", "description"];

  const productQuery = new QueryBuilder(
    Product.find().populate("category"), query)
    .search(productSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;

  return result;




};

//  find Product by database id
const getProductByIdIntoDB = async (id: string) => {
  const result = await Product.findById(id).populate("category");
  return result;
};
//  find Product by database id and update product
const getProductByIdAndUpdateIntoDB = async (id: string, data: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true }).populate("category");
  return result;
};

//  find Product by database id
const getProductByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id, { new: true });
  return result;
};

export const productService = {
  createPrductIntoDB,
  getAllPrductIntoDB,
  getProductByIdIntoDB,
  getProductByIdAndDeleteIntoDB,
  getProductByIdAndUpdateIntoDB,
};
