// Products interface

import { Model, Types } from "mongoose";





export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Types.ObjectId;
  stock: number;
  rating?: number;
  images: string[];
}



//  static instance model


export interface ProductsModel extends Model<IProduct> {
  isProductExists(id: string): Promise<IProduct | null>;
}