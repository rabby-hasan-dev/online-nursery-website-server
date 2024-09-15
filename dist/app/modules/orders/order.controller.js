"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utilis/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utilis/sendResponse"));
const order_service_1 = require("./order.service");
//  Create Product
const createOrder = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const OrderData = req.body;
    const result = yield order_service_1.OrderService.createOrderIntoDB(OrderData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Order create successfully',
        data: result,
    });
}));
//  Retrieve a List of All Orders
const getAllOrder = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getAllOrderIntoDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Retrieve a List of All Orders successfully',
        data: result,
    });
}));
// Retrieve a Specific Order by ID
const getOrderById = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    const result = yield order_service_1.OrderService.getOrderByIdIntoDB(orderId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Retrieve a Specific Order successfully',
        data: result,
    });
}));
// Update Order Information
const getOrderByIdAndDelete = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    const result = yield order_service_1.OrderService.getOrderByIdAndDeleteIntoDB(orderId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Updated Order successfully',
        data: result,
    });
}));
// Retrieve a Specific Order by ID and  Delete a Order
const getOrderByIdAndUpdate = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    const updateData = req.body;
    const result = yield order_service_1.OrderService.getOrderByIdAndUpdateIntoDB(orderId, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Updated Order successfully',
        data: result,
    });
}));
exports.orderController = {
    createOrder,
    getAllOrder,
    getOrderById,
    getOrderByIdAndDelete,
    getOrderByIdAndUpdate,
};
