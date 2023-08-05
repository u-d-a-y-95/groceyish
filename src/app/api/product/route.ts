import dbConnect from "@/helper/backend/dbconfig";
import { CategoryModel } from "@/helper/backend/models/category.model";
import { ProductModel } from "@/helper/backend/models/product.model";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await dbConnect();
  const products = await ProductModel.find().populate({
    path: "category",
    model: CategoryModel,
  });
  return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
  await dbConnect();
  const body = await request.json();
  const product = new ProductModel(body);
  await product.save();
  revalidateTag("FeaturedProduct");
  revalidateTag("Product");
  return NextResponse.json(product);
};
