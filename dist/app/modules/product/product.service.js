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
exports.productService = void 0;
const category_model_1 = require("../category/category.model");
const product_model_1 = require("./product.model");
//  send Product data in database
const createPrductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(product);
    return result;
});
// Retrived all product data from database
const getAllPrductIntoDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const productSearchableField = ["title", "description"];
    // const productQuery = new QueryBuilder(
    //   Product.find({ isDeleted: { $ne: true } }).populate("category"), query)
    //   .search(productSearchableField)
    //   .filter()
    //   .sort()
    //   .paginate()
    //   .fields();
    // // Apply category filter if provided
    // if (query.category) {
    //   productQuery.modelQuery = productQuery.modelQuery.find({
    //     'category.name': query.category  // Adjust this if you store categories differently
    //   });
    // }
    // const result = await productQuery.modelQuery;
    // return result;
    const result = yield product_model_1.Product.find({ isDeleted: { $ne: true } }).populate("category");
    return result;
});
//  find Product by database id
const getProductByIdIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id).populate("category");
    return result;
});
//  find Product by database id and update product
const getProductByIdAndUpdateIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, data, { new: true }).populate("category");
    return result;
});
//  find Product by database id
const getProductByIdAndDeleteIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // step 1: find product form db
    const product = yield product_model_1.Product.isProductExists(id);
    if (!product) {
        throw new Error('Product not found');
    }
    // Step 2: Delete the product
    yield product_model_1.Product.findByIdAndDelete(id, { new: true });
    // Step 3: Decrease the productStock in the associated category
    const categoryId = product.category;
    yield category_model_1.Category.findByIdAndUpdate(categoryId, {
        $inc: { productStock: -1 }
    });
});
exports.productService = {
    createPrductIntoDB,
    getAllPrductIntoDB,
    getProductByIdIntoDB,
    getProductByIdAndDeleteIntoDB,
    getProductByIdAndUpdateIntoDB,
};
