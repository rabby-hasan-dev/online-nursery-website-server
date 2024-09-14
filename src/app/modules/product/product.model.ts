import { model, Schema } from 'mongoose';
import { IProduct, ProductsModel } from './product.interface';
import { Category } from '../category/category.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';

const productSchema = new Schema<IProduct, ProductsModel>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    image: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

productSchema.post('save', async function () {
  const category = await Category.findById(this.category);
  if (!category) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Category Not exists in db');
  }
  if (category) {
    category.productStock += 1;
    await category.save();
  }
});

productSchema.statics.isProductExists = async function (id: string) {
  const existingProduct = await Product.findById(id);

  return existingProduct;
};

export const Product = model<IProduct, ProductsModel>('Product', productSchema);
