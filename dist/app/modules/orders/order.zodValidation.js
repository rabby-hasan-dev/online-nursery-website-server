"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
// Order creation validation schema
const createOrderSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        productId: zod_1.z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
            message: 'Invalid product ID',
        }),
        quantity: zod_1.z.number().min(1, { message: 'Quantity must be at least 1' }),
        customerName: zod_1.z.string().min(1, { message: 'Customer name is required' }),
        customerPhone: zod_1.z.string().min(1, { message: 'Customer phone is required' }),
        customerAddress: zod_1.z
            .string()
            .min(1, { message: 'Customer address is required' }),
    }),
});
// Order update validation schema
const updateOrderSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        productId: zod_1.z.string().optional(),
        quantity: zod_1.z
            .number()
            .min(1, { message: 'Quantity must be at least 1' })
            .optional(),
        isCanceled: zod_1.z.boolean().default(false).optional(),
        customerName: zod_1.z.string().optional(),
        customerPhone: zod_1.z.string().optional(),
        customerAddress: zod_1.z.string().optional(),
    }),
});
exports.OrderValidation = {
    createOrderSchema,
    updateOrderSchema,
};
