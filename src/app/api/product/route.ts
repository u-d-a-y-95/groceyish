import dbConnect from "@/helper/backend/dbconfig";
import { CategoryModel } from "@/helper/backend/models/category.model";
import { ProductModel } from "@/helper/backend/models/product.model";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await dbConnect();
  const name = request.nextUrl.searchParams.get("name");
  const price = request.nextUrl.searchParams.get("price");
  const sort = request.nextUrl.searchParams.get("sort");
  const category =
    request.nextUrl.searchParams.get("category")?.split(",") || [];

  const aggregatePipe = [];
  if (name) {
    aggregatePipe.push({
      $match: {
        name,
      },
    });
  }
  if (price) {
    aggregatePipe.push({
      $match: {
        price: Number(price),
      },
    });
  }
  aggregatePipe.push({
    $lookup: {
      from: "categories",
      localField: "category",
      foreignField: "_id",
      as: "category",
    },
  });

  if (category?.length > 0) {
    aggregatePipe.push({
      $match: {
        "category.name": { $in: category },
      },
    });
  }
  if (sort) {
    aggregatePipe.push({
      $sort: {
        price: (sort === "asc" ? 1 : -1) as any,
      },
    });
  }

  const products = await ProductModel.aggregate(aggregatePipe).exec();
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
