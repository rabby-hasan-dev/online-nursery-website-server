import catchAsync from '../../utilis/catchAsync';

//  Create Product
const createProduct = catchAsync(async (req, res, next) => {
  



});


//  Retrieve a List of All Products
const getAllProduct = catchAsync(async (req, res, next) => {




});



// Retrieve a Specific Product by ID
const getProductById = catchAsync(async (req, res, next) => {




});
// Update Product Information

const getProductByIdAndDelete = catchAsync(async (req, res, next) => {




});
// Retrieve a Specific Product by ID and  Delete a Product
const getProductByIdAndUpdate = catchAsync(async (req, res, next) => {




});

export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  getProductByIdAndDelete,
  getProductByIdAndUpdate,
};
