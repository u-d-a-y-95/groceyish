import dbConnect from "@/helper/backend/dbconfig";
import { ProductModel } from "@/helper/backend/models/product.model";
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
