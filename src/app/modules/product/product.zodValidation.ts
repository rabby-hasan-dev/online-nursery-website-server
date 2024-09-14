import { z } from 'zod';


//url-validator .url()

const ProductValidationSchema = z.object({
  body: z.object({
    title: z.string({ invalid_type_error: "title is Required" }).trim().min(1, 'title is required').max(100, 'title is too long'),
    description: z.string().trim().min(1, 'Description is required').max(2000, 'Description is too long'),
    price: z.number().positive(),
    category: z.string({ invalid_type_error: 'Category ID is required' }),
    quantity: z.number().positive().int(),
    rating: z.number().optional(),
    image: z.string({ invalid_type_error: 'Image URL is required' })
  })
})


const UpdateProductValidationSchema =z.object({
  body: z.object({
    title: z.string({ invalid_type_error: "title is Required" }).trim().min(1, 'title is required').max(100, 'title is too long').optional(),
    description: z.string().trim().min(1, 'Description is required').max(2000, 'Description is too long').optional(),
    price: z.number().positive().optional(),
    quantity: z.number().positive().int().optional(),
    rating: z.number().optional(),
    image: z.string({ invalid_type_error: 'Image URL is required' }).optional(),
  })
})




export const productZodValidator = {
  ProductValidationSchema,
  UpdateProductValidationSchema
}


