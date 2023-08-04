import dbConnect from "@/helper/backend/dbconfig";
import { CategoryModel } from "@/helper/backend/models/category.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();
  const { id } = params;
  const body = await request.json();
  const res = await CategoryModel.findByIdAndUpdate(id, body, { new: true });
  revalidatePath("/");
  return NextResponse.json(res);
};
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();
  const { id } = params;
  const res = await CategoryModel.findByIdAndDelete(id);
  revalidatePath("/");
  return NextResponse.json(res);
};
