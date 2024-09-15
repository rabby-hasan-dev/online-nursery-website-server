"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const order_zodValidation_1 = require("./order.zodValidation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(order_zodValidation_1.OrderValidation.createOrderSchema), order_controller_1.orderController.createOrder);
router.get('/', order_controller_1.orderController.getAllOrder);
router.get('/:orderId', order_controller_1.orderController.getOrderById);
router.put('/:orderId', (0, validateRequest_1.default)(order_zodValidation_1.OrderValidation.updateOrderSchema), order_controller_1.orderController.getOrderByIdAndUpdate);
router.delete('/:orderId', order_controller_1.orderController.getOrderByIdAndDelete);
exports.orderRouter = router;
