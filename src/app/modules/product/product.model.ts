
import { model, Schema } from 'mongoose';
import { IProduct, ProductsModel } from './product.interface';




const productSchema = new Schema<IProduct, ProductsModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  stock: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  images: { type: String, required: true },
  isDeleted: { type: Boolean, default: false }

});


productSchema.statics.isProductExists = async function (id: string) {
  const existingProduct = await Product.findById(id);

  return existingProduct;
};





export const Product = model<IProduct, ProductsModel>('Product', productSchema);
