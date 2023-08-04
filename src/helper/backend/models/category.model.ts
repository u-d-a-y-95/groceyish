import { Schema, model, models } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    url: String,
    bgColor: String,
  },
  { timestamps: true }
);

export const categoryModel =
  models.category || model("category", categorySchema);
