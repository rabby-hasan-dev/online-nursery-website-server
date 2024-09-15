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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
//  send Product data in database
const createCategoryIntoDB = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.create(category);
    return result;
});
// Retrived all categories data from database
const getAllCategoryIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.find({ isDeleted: { $ne: true } });
    return result;
});
//  find Product by database id
const getCategoryByIdIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findById(id);
    return result;
});
//  find Category by database id and update Category
const getCategoryByIdAndUpdateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findByIdAndUpdate(id, data, { new: true });
    return result;
});
//  find Category by database id
const getCategoryByIdAndDeleteIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
exports.CategoryService = {
    createCategoryIntoDB,
    getAllCategoryIntoDB,
    getCategoryByIdIntoDB,
    getCategoryByIdAndDeleteIntoDB,
    getCategoryByIdAndUpdateIntoDB,
};
