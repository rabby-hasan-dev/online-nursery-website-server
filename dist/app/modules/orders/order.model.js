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
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/product.model");
const orderSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
    },
    isCanceled: {
        type: Boolean,
        default: false,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    },
    customerAddress: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
orderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified('quantity') || this.isNew) {
            const product = yield product_model_1.Product.findById(this.productId);
            if (product) {
                if (product.quantity < this.quantity) {
                    throw new Error('Not enough product quantity available');
                }
                this.totalPrice = product.price * this.quantity;
            }
            else {
                throw new Error('Product not found');
            }
        }
        next();
    });
});
orderSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield product_model_1.Product.findById(this.productId);
        if (product) {
            product.quantity -= this.quantity;
            yield product.save();
        }
    });
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
