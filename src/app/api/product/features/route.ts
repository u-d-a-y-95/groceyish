import dbConnect from "@/helper/backend/dbconfig";
import { ProductModel } from "@/helper/backend/models/product.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await dbConnect();
  const products = await ProductModel.find({ isFeatured: true });
  return NextResponse.json(products);
};
