import dbConnect from "@/helper/backend/dbconfig";
import { categoryModel } from "@/helper/backend/models/category.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();
  const categories = await categoryModel.find();
  return NextResponse.json(categories);
};

export const POST = async (request: NextRequest) => {
  await dbConnect();
  const body = await request.json();
  const newCategory = new categoryModel(body);
  const saveProduct = await newCategory.save();
  revalidatePath("/");
  return NextResponse.json(saveProduct);
};
