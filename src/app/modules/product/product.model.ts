
import { model, Schema } from 'mongoose';
import { IProduct, ProductsModel } from './product.interface';




const productSchema = new Schema<IProduct, ProductsModel>({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  brand: { type: String, required: true, trim: true },
  stock: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  images: { type: String, required: true },
  isDeleted: { type: Boolean, default: false }

}, {
  timestamps: true,
  versionKey: false
});


productSchema.statics.isProductExists = async function (id: any) {
  const existingProduct = await Product.findById(id);

  return existingProduct;
};





export const Product = model<IProduct, ProductsModel>('Product', productSchema);
