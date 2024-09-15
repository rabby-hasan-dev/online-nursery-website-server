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
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const order_model_1 = require("./order.model");
const product_model_1 = require("../product/product.model");
//  send order data in database
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(order);
    return result;
});
// Retrived all order data from database
const getAllOrderIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ isCancel: { $ne: true } }).populate({
        path: 'productId',
        populate: {
            path: 'category',
        },
    });
    return result;
});
//  find order by database id
const getOrderByIdIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(id);
    return result;
});
//  find Order by database id and update Order
const getOrderByIdAndUpdateIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch the current order
    const currentOrder = yield order_model_1.Order.findById(id);
    if (!currentOrder) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    // Check if quantity or product is being updated
    if (payload.quantity || payload.productId) {
        const productId = payload.productId || currentOrder.productId;
        const product = yield product_model_1.Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        // Use updated quantity if provided, otherwise use current quantity
        const quantity = payload.quantity || currentOrder.quantity;
        payload.totalPrice = product.price * quantity;
    }
    const result = yield order_model_1.Order.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    return result;
});
//  find Order by database id
const getOrderByIdAndDeleteIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndUpdate(id, { isCanceled: true }, { new: true });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Order not found');
    }
    return result;
});
exports.OrderService = {
    createOrderIntoDB,
    getAllOrderIntoDB,
    getOrderByIdIntoDB,
    getOrderByIdAndDeleteIntoDB,
    getOrderByIdAndUpdateIntoDB,
};
