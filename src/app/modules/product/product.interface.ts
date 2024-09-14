// Products interface

import { Model, Types } from 'mongoose';

export interface IProduct {
  title: string;
  description: string;
  price: number;
  category: Types.ObjectId;
  quantity: number;
  rating?: number;
  image: string;
  isDeleted?: boolean;
}

//  static instance model

export interface ProductsModel extends Model<IProduct> {
  isProductExists(id: string): Promise<IProduct | null>;
}
