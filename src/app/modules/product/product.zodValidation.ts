import { z } from 'zod';


//url-validator .url()

const ProductValidationSchema = z.object({
  body: z.object({
    title: z.string({ invalid_type_error: "title is Required" }).trim().min(1, 'title is required').max(100, 'title is too long'),
    description: z.string().trim().min(1, 'Description is required').max(2000, 'Description is too long'),
    price: z.number().positive().nonnegative(),
    category: z.string({ invalid_type_error: 'Category ID is required' }),
    brand: z.string().trim().min(1, 'Brand is required'),
    stock: z.number().nonnegative().int(),
    rating: z.number().optional(),
    images: z.string({ invalid_type_error: 'Image URL is required' })
  })
})
const UpdateProductValidationSchema = z.object({
  body: z.object({
    title: z.string({ invalid_type_error: "title is Required" }).trim().min(1, 'title is required').max(100, 'title is too long').optional(),
    description: z.string().trim().min(1, 'Description is required').max(2000, 'Description is too long').optional(),
    price: z.number().positive().nonnegative().optional(),
    category: z.string({ invalid_type_error: 'Category ID is required' }).optional(),
    brand: z.string().trim().min(1, 'Brand is required').optional(),
    stock: z.number().nonnegative().int().optional(),
    rating: z.number().optional(),
    images: z.string({ invalid_type_error: 'Image URL is required' }).optional()
  })
})


export const productZodValidator = {
  ProductValidationSchema,
  UpdateProductValidationSchema
}


