import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';



const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true, unique: true },
    image: { type: String },
    description: { type: String },
    productStock: { type: Number , default: 0},
    isDeleted: { type: Boolean, default: false }

},{
    timestamps: true,
  versionKey: false
});


export const Category = model<ICategory>('Category', categorySchema);


