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
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const category_model_1 = require("../category/category.model");
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category', required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    image: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false,
});
productSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield category_model_1.Category.findById(this.category);
        if (!category) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This Category Not exists in db');
        }
        if (category) {
            category.productStock += 1;
            yield category.save();
        }
    });
});
productSchema.statics.isProductExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingProduct = yield exports.Product.findById(id);
        return existingProduct;
    });
};
exports.Product = (0, mongoose_1.model)('Product', productSchema);
