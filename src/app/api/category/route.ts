import dbConnect from "@/helper/backend/dbconfig";
import { CategoryModel } from "@/helper/backend/models/category.model";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();
  const categories = await CategoryModel.find();
  return NextResponse.json(categories);
};

export const POST = async (request: NextRequest) => {
  await dbConnect();
  const body = await request.json();
  const newCategory = new CategoryModel(body);
  const saveProduct = await newCategory.save();
  revalidatePath("Category");
  return NextResponse.json(saveProduct);
};
