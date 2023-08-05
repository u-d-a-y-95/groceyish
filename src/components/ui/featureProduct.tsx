import { IProduct } from "@/helper/dtos/product.dto";
import { ProductCard } from "./ProductCard";

// async function getFeatureProducts<T>(): Promise<T[]> {
//   const res = await fetch(`${process.env.BASE_URL}/api/product/features`, {
//     next: {
//       tags: ["FeaturedProduct"],
//     },
//   });
//   return res.json();
// }

export const FeatureProducts = async () => {
  // const products: IProduct[] = await getFeatureProducts<IProduct>();
  return (
    <div className="container mx-auto py-5 px-5 xl:px-0">
      <div>
        <h4 className="text-2xl py-7">Featured Products</h4>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  justify-items-center md:justify-items-start">
        {/* {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))} */}
      </div>
    </div>
  );
};
