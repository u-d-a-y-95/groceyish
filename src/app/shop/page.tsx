"use client";
import { CheckBox } from "@/components/core/checkBox";
import { ProductsList } from "@/components/ui/pages/shop/productsList";
import { categoryFetcher, productFetcher } from "@/helper/frontend/apiHelper";
import { queryFromObject } from "@/helper/frontend/util";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface IFormInput {
  name: string;
  price: number;
  category: Array<any>;
  sort: string;
}

export default function ShopPage() {
  const [path, setPath] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const { data: res, isLoading: productLoading } = useSWR(
    `/api/product?${path}&skip=${pageNo * 8}`,
    productFetcher
  );
  const { register, handleSubmit, setValue, getValues } = useForm<IFormInput>(
    {}
  );
  const { data: category, isLoading } = useSWR(`category`, categoryFetcher);

  const filterSubmitHandler = (value: IFormInput) => {
    setPageNo(0);
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
          <ProductsList products={res?.data} isLoading={productLoading} />

          <div className="text-primary flex justify-end gap-5 my-5 font-bold">
            <button
              className=" disabled:cursor-not-allowed"
              type="button"
              onClick={() => setPageNo((pageNo) => pageNo - 1)}
              disabled={pageNo < 1}
            >
              Prev
            </button>
            <button className="border p-2 px-4">{pageNo + 1}</button>
            <button
              className=" disabled:cursor-not-allowed"
              type="button"
              onClick={() => setPageNo((pageNo) => pageNo + 1)}
              disabled={(pageNo + 1) * 8 > res?.count}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
