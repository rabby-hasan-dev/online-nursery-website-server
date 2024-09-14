import { ICategory } from './category.interface';
import { Category } from './category.model';

//  send Product data in database
const createCategoryIntoDB = async (category: ICategory) => {
  const result = await Category.create(category);
  return result;
};

// Retrived all categories data from database

const getAllCategoryIntoDB = async () => {
  const result = await Category.find({ isDeleted: { $ne: true } });
  return result;
};

//  find Product by database id
const getCategoryByIdIntoDB = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};
//  find Category by database id and update Category
const getCategoryByIdAndUpdateIntoDB = async (
  id: string,
  data: Partial<ICategory>,
) => {
  const result = await Category.findByIdAndUpdate(id, data, { new: true });
  return result;
};

//  find Category by database id
const getCategoryByIdAndDeleteIntoDB = async (id: string) => {
  const result = await Category.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CategoryService = {
  createCategoryIntoDB,
  getAllCategoryIntoDB,
  getCategoryByIdIntoDB,
  getCategoryByIdAndDeleteIntoDB,
  getCategoryByIdAndUpdateIntoDB,
};
