"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryZodValidator = void 0;
const zod_1 = require("zod");
const CategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string().optional(),
        name: zod_1.z.string().trim().min(1, 'name is required'),
        image: zod_1.z.string().trim().min(1, 'image is required'),
        description: zod_1.z.string().trim().min(1, 'description is required'),
    }),
});
const CategoryUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string().optional().optional(),
        name: zod_1.z.string().trim().optional(),
        image: zod_1.z.string().trim().optional(),
        description: zod_1.z.string().optional(),
    }),
});
exports.CategoryZodValidator = {
    CategoryValidationSchema,
    CategoryUpdateValidationSchema,
};
