import { model, Schema } from "mongoose";




const orderSchema = new Schema({
  userId: {
    // type: Schema.Types.ObjectId,
    type: String,
    required: true,
    // ref: 'User' // Reference to the User model 
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product' // Reference to the Product model
  },
  quantity: {
    type: Number,
    required: true,
    min: 1 // Optional, ensures quantity is positive
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isCancel: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

export const Order = model('Order', orderSchema);






