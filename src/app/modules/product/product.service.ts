import QueryBuilder from "../../builder/QueryBuilder";
import { Category } from "../category/category.model";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";


//  send Product data in database
const createPrductIntoDB = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;

};

// Retrived all product data from database

const getAllPrductIntoDB = async (query: Record<string, unknown>) => {

  // const productSearchableField = ["title", "description"];

  // const productQuery = new QueryBuilder(
  //   Product.find({ isDeleted: { $ne: true } }).populate("category"), query)
  //   .search(productSearchableField)
  //   .filter()
  //   .sort()
  //   .paginate()
  //   .fields();

  // // Apply category filter if provided

  // if (query.category) {
  //   productQuery.modelQuery = productQuery.modelQuery.find({
  //     'category.name': query.category  // Adjust this if you store categories differently
  //   });
  // }

  // const result = await productQuery.modelQuery;

  // return result;
  const result = await Product.find({ isDeleted: { $ne: true } }).populate("category");

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

  // step 1: find product form db
  const product = await Product.isProductExists(id);
  if (!product) {
    throw new Error('Product not found');
  }

  // Step 2: Delete the product
  await Product.findByIdAndDelete(id, { new: true })

  // Step 3: Decrease the productStock in the associated category
  const categoryId = product.category;

  await Category.findByIdAndUpdate(categoryId, {
    $inc: { productStock: -1 }
  });


};

export const productService = {
  createPrductIntoDB,
  getAllPrductIntoDB,
  getProductByIdIntoDB,
  getProductByIdAndDeleteIntoDB,
  getProductByIdAndUpdateIntoDB,
};
