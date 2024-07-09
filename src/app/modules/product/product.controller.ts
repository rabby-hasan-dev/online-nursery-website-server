import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { productService } from './product.service';

//  Create Product
const createProduct = catchAsync(async (req, res, next) => {
  const productData = req.body;

  const result = await productService.createPrductIntoDB(productData);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Category create successfully',
    data: result,
  });




});


//  Retrieve a List of All Products
const getAllProduct = catchAsync(async (req, res, next) => {
  const query = req.query;
  const result = await productService.getAllPrductIntoDB(query);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve a List of All Products successfully',
    data: result,
  });



});



// Retrieve a Specific Product by ID
const getProductById = catchAsync(async (req, res, next) => {
  const { productId } = req.params;

  const result = await productService.getProductByIdIntoDB(productId);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve a Specific Product successfully',
    data: result,
  });


});
// Update Product Information

const getProductByIdAndDelete = catchAsync(async (req, res, next) => {

  const { productId } = req.params;


  const result = await productService.getProductByIdAndDeleteIntoDB(productId);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Updated Product successfully',
    data: result,
  });


});
// Retrieve a Specific Product by ID and  Delete a Product
const getProductByIdAndUpdate = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const updateData = req.body;

  const result = await productService.getProductByIdAndUpdateIntoDB(productId, updateData);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Updated Product successfully',
    data: result,
  });



});

export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  getProductByIdAndDelete,
  getProductByIdAndUpdate,
};
