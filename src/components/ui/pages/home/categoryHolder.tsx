"use client";
import { categoryFetcher } from "@/helper/frontend/apiHelper";
import { CategoryCard } from "../../categoryCard";
import useSWR from "swr";
import { ICategory } from "@/helper/dtos/category.dto";

// async function getCategories<T>(): Promise<T[]> {
//   const res = await fetch(`${process.env.BASE_URL}/api/category`, {
//     next: {
//       tags: ["Category"],
//     },
//   });
//   return res.json();
// }

export const CategoryHolder = () => {
  // const categories = await getCategories<ICategory>();
  const { data: categories, isLoading } = useSWR(
    `/api/category`,
    categoryFetcher
  );
  if (isLoading) return null;
  return (
    <div className="container mx-auto py-10 px-5 xl:px-0">
      <div>
        <h4 className="text-2xl py-7">Explore Categories</h4>
      </div>
      <div className="flex gap-5 flex-wrap">
        {categories.map((item: ICategory, index: number) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
