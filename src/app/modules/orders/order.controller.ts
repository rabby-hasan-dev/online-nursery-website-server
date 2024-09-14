import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { OrderService } from './order.service';


//  Create Product
const createOrder = catchAsync(async (req, res, next) => {
  const OrderData = req.body;
  const result = await OrderService.createOrderIntoDB(OrderData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Order create successfully',
    data: result,
  });




});


//  Retrieve a List of All Orders
const getAllOrder = catchAsync(async (req, res, next) => {

  const result = await OrderService.getAllOrderIntoDB();


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve a List of All Orders successfully',
    data: result,
  });



});



// Retrieve a Specific Order by ID
const getOrderById = catchAsync(async (req, res, next) => {
  const { orderId } = req.params;

  const result = await OrderService.getOrderByIdIntoDB(orderId);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Retrieve a Specific Order successfully',
    data: result,
  });


});
// Update Order Information

const getOrderByIdAndDelete = catchAsync(async (req, res, next) => {

  const { orderId } = req.params;


  const result = await OrderService.getOrderByIdAndDeleteIntoDB(orderId);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Updated Order successfully',
    data: result,
  });


});
// Retrieve a Specific Order by ID and  Delete a Order
const getOrderByIdAndUpdate = catchAsync(async (req, res, next) => {
  const { orderId } = req.params;
  const updateData = req.body;
  const result = await OrderService.getOrderByIdAndUpdateIntoDB(orderId, updateData);


  sendResponse(res, {
    statusCode: httpStatus.OK,
    succcess: true,
    message: 'Updated Order successfully',
    data: result,
  });



});

export const orderController = {
  createOrder,
  getAllOrder,
  getOrderById,
  getOrderByIdAndDelete,
  getOrderByIdAndUpdate,
};
