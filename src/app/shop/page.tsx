"use client";
import { CheckBox } from "@/components/core/checkBox";
import { ProductsList } from "@/components/ui/pages/shop/productsList";
import { categoryFetcher } from "@/helper/frontend/apiHelper";
import { queryFromObject } from "@/helper/frontend/util";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface IFormInput {
  name: string;
  price: number;
  category: Array<any>;
  sort: string;
}

export default function ShopPage() {
  const { register, handleSubmit, setValue, getValues } = useForm<IFormInput>(
    {}
  );
  const {
    data: category,
    error,
    isLoading,
  } = useSWR(`category`, categoryFetcher);
  const [path, setPath] = useState("");

  const filterSubmitHandler = (value: IFormInput) => {
    setPath(queryFromObject(value));
  };
  if (isLoading) return null;
  return (
    <div>
      <div className="container mx-auto flex my-10 gap-10 px-5">
        <div className="hidden lg:block min-w-[350px] border-r pr-10">
          <div className="text-xl font-semibold border-b pb-2">Filter</div>

          <form onSubmit={handleSubmit(filterSubmitHandler)}>
            <div className="mt-10 flex flex-col gap-6">
              <div>
                <p className="font-semibold mb-2">Sort</p>
                <select className="border p-2 w-full" {...register("sort")}>
                  <option value="">None</option>
                  <option value="asc">Low to Hight</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-2">Name</p>
                <input
                  className="border p-2 w-full"
                  placeholder="Enter product name"
                  {...register("name")}
                />
              </div>
              <div>
                <p className="font-semibold mb-2">Price</p>
                <input
                  className="border p-2 w-full"
                  placeholder="enter price"
                  {...register("price")}
                />
              </div>
              <div className="font-semibold mb-2">
                <p className="font-semibold mb-2">Categories</p>
                <div>
                  <CheckBox
                    list={category}
                    setValue={setValue}
                    name="category"
                  />
                </div>
              </div>
              <button className="bg-primary text-white p-3" type="submit">
                Apply
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 relative">
          <ProductsList path={path} />
        </div>
      </div>
    </div>
  );
}
