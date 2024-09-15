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
exports.productController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utilis/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utilis/sendResponse"));
const product_service_1 = require("./product.service");
//  Create Product
const createProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.productService.createPrductIntoDB(productData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Category create successfully',
        data: result,
    });
}));
//  Retrieve a List of All Products
const getAllProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield product_service_1.productService.getAllPrductIntoDB(query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Retrieve a List of All Products successfully',
        data: result,
    });
}));
// Retrieve a Specific Product by ID
const getProductById = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.productService.getProductByIdIntoDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Retrieve a Specific Product successfully',
        data: result,
    });
}));
// Update Product Information
const getProductByIdAndDelete = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.productService.getProductByIdAndDeleteIntoDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Updated Product successfully',
        data: result,
    });
}));
// Retrieve a Specific Product by ID and  Delete a Product
const getProductByIdAndUpdate = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const updateData = req.body;
    const result = yield product_service_1.productService.getProductByIdAndUpdateIntoDB(productId, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Updated Product successfully',
        data: result,
    });
}));
exports.productController = {
    createProduct,
    getAllProduct,
    getProductById,
    getProductByIdAndDelete,
    getProductByIdAndUpdate,
};
