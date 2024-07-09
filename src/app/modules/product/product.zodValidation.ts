import { z } from 'zod';


//url-validator .url()

const ProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: "name is Required" }).trim().min(1, 'Name is required').max(100, 'Name is too long'),
    description: z.string().trim().min(1, 'Description is required').max(2000, 'Description is too long'),
    price: z.number().positive().nonnegative(),
    category: z.string({ invalid_type_error: 'Category ID is required' }),
    stock: z.number().nonnegative().int(),
    rating: z.number().optional(),
    images: z.string({ invalid_type_error: 'Image URL is required' })
  })
})
const UpdateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: "name is Required" }).trim().min(1, 'Name is required').max(100, 'Name is too long').optional(),
    description: z.string().trim().min(1, 'Description is required').max(2000, 'Description is too long').optional(),
    price: z.number().positive().nonnegative().optional(),
    category: z.string({ invalid_type_error: 'Category ID is required' }).optional(),
    stock: z.number().nonnegative().int().optional(),
    rating: z.number().optional(),
    images: z.string({ invalid_type_error: 'Image URL is required' }).optional()
  })
})


export const productZodValidator = {
  ProductValidationSchema,
  UpdateProductValidationSchema
}


