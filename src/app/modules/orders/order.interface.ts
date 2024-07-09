// Order interface

import { Types } from "mongoose";


export interface IOrder {
  userId: string;
  productId: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  isCancel?: boolean;
}



