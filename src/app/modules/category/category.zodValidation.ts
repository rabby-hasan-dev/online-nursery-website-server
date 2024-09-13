import { z } from 'zod';


const CategoryValidationSchema = z.object({
  
  body: z.object({
    _id: z.string().optional(),
    name: z.string().trim().min(1, 'name is required'),
    image: z.string().trim().min(1, 'image is required'),
    description: z.string().trim().min(1, 'description is required'),
  })


});

const CategoryUpdateValidationSchema = z.object({

  body: z.object({
    _id: z.string().optional().optional(),
    name: z.string().trim().optional(),
    image: z.string().trim().optional(),
    description: z.string().optional(),
  })


});


export const CategoryZodValidator = {
  CategoryValidationSchema,
  CategoryUpdateValidationSchema
}
