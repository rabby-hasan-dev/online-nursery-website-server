"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productZodValidator = void 0;
const zod_1 = require("zod");
//url-validator .url()
const ProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ invalid_type_error: 'title is Required' })
            .trim()
            .min(1, 'title is required')
            .max(100, 'title is too long'),
        description: zod_1.z
            .string()
            .trim()
            .min(1, 'Description is required')
            .max(2000, 'Description is too long'),
        price: zod_1.z.number().positive(),
        category: zod_1.z.string({ invalid_type_error: 'Category ID is required' }),
        quantity: zod_1.z.number().positive().int(),
        rating: zod_1.z.number().optional(),
        image: zod_1.z.string({ invalid_type_error: 'Image URL is required' }),
    }),
});
const UpdateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ invalid_type_error: 'title is Required' })
            .trim()
            .min(1, 'title is required')
            .max(100, 'title is too long')
            .optional(),
        description: zod_1.z
            .string()
            .trim()
            .min(1, 'Description is required')
            .max(2000, 'Description is too long')
            .optional(),
        price: zod_1.z.number().positive().optional(),
        quantity: zod_1.z.number().positive().int().optional(),
        rating: zod_1.z.number().optional(),
        image: zod_1.z.string({ invalid_type_error: 'Image URL is required' }).optional(),
    }),
});
exports.productZodValidator = {
    ProductValidationSchema,
    UpdateProductValidationSchema,
};
