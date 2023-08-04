import dbConnect from "@/helper/backend/dbconfig";
import { ProductModel } from "@/helper/backend/models/product.model";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();
  const { id } = params;
  const res = await ProductModel.findById(id).populate("category");
  return NextResponse.json(res);
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();
  const { id } = params;
  const body = await request.json();
  const res = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  revalidateTag("FeaturedProduct");
  revalidateTag("Product");
  return NextResponse.json(res);
};
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();
  const { id } = params;
  const res = await ProductModel.findByIdAndDelete(id);
  revalidateTag("FeaturedProduct");
  revalidateTag("Product");
  return NextResponse.json(res);
};
