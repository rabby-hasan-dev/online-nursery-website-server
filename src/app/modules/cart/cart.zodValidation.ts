import { z } from 'zod';


export const orderSchemaValidation = z.object({
  userId: z.string().uuid().optional(),
  productId: z.string().required(),
  quantity: z.number().positive().nonnegative().int().required(),
  totalPrice: z.number().positive().nonnegative().required(),
  isCancel: z.boolean().optional(),
});
