import { ProductCard } from "@/components/ui/ProductCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const products = [
  {
    name: "lal Shak",
    url: "/img/category-1.png",
    price: 20,
    category: "Vegetables",
    rating: 4,
  },

  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 3,
  },
  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 5,
  },
  {
    name: "lal Shak",
    url: "/img/category-1.png",
    price: 20,
    category: "Vegetables",
    rating: 4,
  },

  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 3,
  },
  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 5,
  },
  {
    name: "lal Shak",
    url: "/img/category-1.png",
    price: 20,
    category: "Vegetables",
    rating: 4,
  },

  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 3,
  },
];
export default function ShopPage() {
  return (
    <div>
      <div className="container mx-auto flex my-10 gap-10">
        <div className="min-w-[350px] border-r pr-10">
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

        <div>
          <div className="">
            <div className="flex w-5/12">
              <input placeholder="search" className="border p-2 flex-1" />
              <button className=" bg-primary px-4 text-white rounded-e">
                <MagnifyingGlassIcon className="w-5 h-5" />{" "}
              </button>
            </div>
            <div></div>
          </div>
          <div className="my-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  justify-items-center md:justify-items-start">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 xl:px-0">
        <div>
          <h4 className="text-2xl py-7">Featured Products</h4>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  justify-items-center md:justify-items-start">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
