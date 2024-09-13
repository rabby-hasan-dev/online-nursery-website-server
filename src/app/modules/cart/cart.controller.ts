import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { cartService } from './cart.service';


//  Create Product
const createCart = catchAsync(async (req, res, next) => {
  const CartData = req.body;


  const result = await cartService.createCartIntoDB(CartData);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Cart create successfully',
    data: result,
  });




});


//  Retrieve a List of All Carts
const getAllCart = catchAsync(async (req, res, next) => {

  const result = await cartService.getAllCartIntoDB();


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve a List of All Carts successfully',
    data: result,
  });



});



// Retrieve a Specific Cart by ID
const getCartById = catchAsync(async (req, res, next) => {
  const { CartId } = req.params;

  const result = await cartService.getCartByIdIntoDB(CartId);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve a Specific Cart successfully',
    data: result,
  });


});
// Update Cart Information

const getCartByIdAndDelete = catchAsync(async (req, res, next) => {

  const { CartId } = req.params;


  const result = await cartService.getCartByIdAndDeleteIntoDB(CartId);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Updated Cart successfully',
    data: result,
  });


});
// Retrieve a Specific Cart by ID and  Delete a Cart
const getCartByIdAndUpdate = catchAsync(async (req, res, next) => {
  const { CartId } = req.params;
  const updateData = req.body;

  const result = await cartService.getCartByIdAndUpdateIntoDB(CartId, updateData);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Updated Cart successfully',
    data: result,
  });



});

export const cartController = {
  createCart,
  getAllCart,
  getCartById,
  getCartByIdAndDelete,
  getCartByIdAndUpdate,
};
