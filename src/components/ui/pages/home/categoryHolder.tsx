import { CategoryCard } from "../../categoryCard";

interface ICategory {
  name: string;
  url: string;
  itemCount: number;
  bgColor: string;
}

async function getCategories<T>(): Promise<T[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/category`, {
    next: {
      tags: ["Category"],
    },
  });
  return res.json();
}

export const CategoryHolder = async () => {
  const categories = await getCategories<ICategory>();
  return (
    <div className="container mx-auto py-10 px-5 xl:px-0">
      <div>
        <h4 className="text-2xl py-7">Explore Categories</h4>
      </div>
      <div className="flex gap-5 flex-wrap">
        {categories.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
