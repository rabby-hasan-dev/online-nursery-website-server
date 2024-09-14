import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';



const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true, unique: true },
    image: { type: String, required:true },
    description: { type: String, required:true },
    productStock: { type: Number , default: 0},
    sellNumber:{ type: Number , default: 0},
    isDeleted: { type: Boolean, default: false }

},{
    timestamps: true,
  versionKey: false
});


export const Category = model<ICategory>('Category', categorySchema);


