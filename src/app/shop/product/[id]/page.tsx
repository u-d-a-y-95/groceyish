"use client";
import { Rating } from "@/components/core/rating";
import { useGlobalContext } from "@/helper/frontend/state/globalContext";
import { addToCart } from "@/helper/frontend/util";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (id: string) =>
  fetch(`/api/product/${id}`).then((res) => res.json());
export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: product, error, isLoading } = useSWR(`${id}`, fetcher);

  const { dispatch } = useGlobalContext();
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const onClickHandler = (e: any) => {
    e.preventDefault();
    addToCart(dispatch, product);
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row my-10 p-10 justify-center gap-10 min-h-[500px]  ">
          <div className="relative md:flex-1  max-w-[400px] h-[250px] md:h-[300px] lg:h-[350px] bg-gray-100">
            <Image src={product.url} fill={true} alt="product" />
          </div>
          <div className="flex-1 max-w-[600px]">
            <h4 className="text-primary text-2xl md:text-4xl font-bold">
              {product.name}
            </h4>
            <Rating count={product.rating} />
            <p className="my-2">
              <span className="text-gray-500 line-through text-xs">$200</span>{" "}
              <span className="text-primary ml-3 font-semibold">
                ${product.price}
              </span>
            </p>
            <div className="mt-10 text-gray-600">
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-5">
              <p className="font-bold text-primary">
                Stock :
                <span className="border p-2 text-center ml-5 rounded w-24 inline-block border-primary">
                  {product.stock}
                </span>
              </p>
              <button
                className="bg-primary text-white border-0 p-2 px-6 capitalize rounded"
                type="button"
                onClick={onClickHandler}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
