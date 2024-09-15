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
exports.CategoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utilis/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utilis/sendResponse"));
const category_service_1 = require("./category.service");
//  Create Product
const createCategory = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body;
    const result = yield category_service_1.CategoryService.createCategoryIntoDB(categoryData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Category create successfully',
        data: result,
    });
}));
//  Retrieve a List of All Categories
const getAllCategory = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryService.getAllCategoryIntoDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: ' Retrieve Category  successfully',
        data: result,
    });
}));
// Retrieve a Specific Product by ID
const getCategoryById = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoriesId } = req.params;
    const result = yield category_service_1.CategoryService.getCategoryByIdIntoDB(categoriesId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Retrieve Category successfully',
        data: result,
    });
}));
// Update Category Information
const getCategoryByIdAndDelete = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoriesId } = req.params;
    const result = yield category_service_1.CategoryService.getCategoryByIdAndDeleteIntoDB(categoriesId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: ' Delete Category successfully',
        data: result,
    });
}));
// Retrieve a Specific Category by ID and  Delete a Category
const getCategoryByIdAndUpdate = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoriesId } = req.params;
    const updateData = req.body;
    const result = yield category_service_1.CategoryService.getCategoryByIdAndUpdateIntoDB(categoriesId, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        succcess: true,
        message: 'Update category successfully',
        data: result,
    });
}));
exports.CategoryController = {
    createCategory,
    getAllCategory,
    getCategoryById,
    getCategoryByIdAndDelete,
    getCategoryByIdAndUpdate,
};
