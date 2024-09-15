"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_zodValidation_1 = require("./product.zodValidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(product_zodValidation_1.productZodValidator.ProductValidationSchema), product_controller_1.productController.createProduct);
router.get('/', product_controller_1.productController.getAllProduct);
router.get('/singleProduct/:productId', product_controller_1.productController.getProductById);
router.put('/:productId', (0, validateRequest_1.default)(product_zodValidation_1.productZodValidator.UpdateProductValidationSchema), product_controller_1.productController.getProductByIdAndUpdate);
router.delete('/:productId', product_controller_1.productController.getProductByIdAndDelete);
exports.productRouter = router;
