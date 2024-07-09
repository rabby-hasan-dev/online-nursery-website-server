import { z } from 'zod';


// Define the ProductSchema in Zod

const ProductValidationSchema = z.object({
  _id: z.string().optional(),
  name: z.string().trim().min(1, 'name is required'),
  description: z.string().trim().min(1, 'description is required'),

});

export default ProductValidationSchema;
