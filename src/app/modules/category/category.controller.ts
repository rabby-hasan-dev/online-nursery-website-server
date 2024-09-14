import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { CategoryService } from './category.service';

//  Create Product
const createCategory = catchAsync(async (req, res, next) => {
  const categoryData = req.body;

  const result = await CategoryService.createCategoryIntoDB(categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Category create successfully',
    data: result,
  });
});

//  Retrieve a List of All Categories
const getAllCategory = catchAsync(async (req, res, next) => {
  const result = await CategoryService.getAllCategoryIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: ' Retrieve Category  successfully',
    data: result,
  });
});

// Retrieve a Specific Product by ID
const getCategoryById = catchAsync(async (req, res, next) => {
  const { categoriesId } = req.params;

  const result = await CategoryService.getCategoryByIdIntoDB(categoriesId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve Category successfully',
    data: result,
  });
});
// Update Category Information

const getCategoryByIdAndDelete = catchAsync(async (req, res, next) => {
  const { categoriesId } = req.params;
  const result =
    await CategoryService.getCategoryByIdAndDeleteIntoDB(categoriesId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: ' Delete Category successfully',
    data: result,
  });
});
// Retrieve a Specific Category by ID and  Delete a Category
const getCategoryByIdAndUpdate = catchAsync(async (req, res, next) => {
  const { categoriesId } = req.params;
  const updateData = req.body;
  const result = await CategoryService.getCategoryByIdAndUpdateIntoDB(
    categoriesId,
    updateData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Update category successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategory,
  getCategoryById,
  getCategoryByIdAndDelete,
  getCategoryByIdAndUpdate,
};
