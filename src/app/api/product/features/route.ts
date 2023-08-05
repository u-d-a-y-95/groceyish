import dbConnect from "@/helper/backend/dbconfig";
import { CategoryModel } from "@/helper/backend/models/category.model";
import { ProductModel } from "@/helper/backend/models/product.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await dbConnect();
  const products = await ProductModel.find({ isFeatured: true }).populate({
    path: "category",
    model: CategoryModel,
  });
  return NextResponse.json(products);
};
