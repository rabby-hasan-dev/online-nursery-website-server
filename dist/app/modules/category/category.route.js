"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const category_zodValidation_1 = require("./category.zodValidation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(category_zodValidation_1.CategoryZodValidator.CategoryValidationSchema), category_controller_1.CategoryController.createCategory);
router.get('/', category_controller_1.CategoryController.getAllCategory);
router.get('/:categoriesId', category_controller_1.CategoryController.getCategoryById);
router.put('/:categoriesId', (0, validateRequest_1.default)(category_zodValidation_1.CategoryZodValidator.CategoryUpdateValidationSchema), category_controller_1.CategoryController.getCategoryByIdAndUpdate);
router.delete('/:categoriesId', category_controller_1.CategoryController.getCategoryByIdAndDelete);
exports.categoryRouter = router;
