import { ProductCard } from "@/components/ui/ProductCard";
import { FeatureProducts } from "@/components/ui/featureProduct";
import { IProduct } from "@/helper/dtos/product.dto";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

async function getProducts<T>(): Promise<T[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/product`, {
    next: {
      tags: ["Category"],
    },
  });
  return res.json();
}
export default async function ShopPage() {
  const products = await getProducts<IProduct>();
  return (
    <div>
      <div className="container mx-auto flex my-10 gap-10 px-5">
        <div className="hidden lg:block min-w-[350px] border-r pr-10">
          <div className="text-xl font-semibold border-b pb-2 ">Filter</div>

          <div className="mt-10 flex flex-col gap-6">
            <div>
              <p className="font-semibold mb-2">Price</p>
              <input className="border p-2 w-full" placeholder="enter price" />
            </div>
            <div className="font-semibold mb-2">
              <p className="font-semibold mb-2">Categpries</p>
              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
                    id="fruits"
                  />
                  <label className="ml-2 font-medium" htmlFor="fruits">
                    Fruits
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
                    id="vegetables"
                  />
                  <label className="ml-2 font-medium" htmlFor="vegetables">
                    Vegetables
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
                    id="nuts"
                  />
                  <label className="ml-2 font-medium" htmlFor="nuts">
                    Nuts
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="">
            <div className="flex  sm:w-5/12">
              <input placeholder="search" className="border p-2 flex-1" />
              <button className=" bg-primary px-4 text-white rounded-e">
                <MagnifyingGlassIcon className="w-5 h-5" />{" "}
              </button>
            </div>
            <div></div>
          </div>
          <div className="my-5 grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5  justify-items-center md:justify-items-start">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <FeatureProducts />
    </div>
  );
}
