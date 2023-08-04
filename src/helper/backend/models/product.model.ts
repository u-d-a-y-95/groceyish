import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.ObjectId,
    ref: "category",
    required: true,
  },
  rating: Number,
  url: String,
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

export const ProductModel = models.product || model("product", productSchema);
