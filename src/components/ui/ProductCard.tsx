"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Rating } from "../core/rating";
import { IProduct } from "@/helper/dtos/product.dto";
import { useGlobalContext } from "@/helper/frontend/state/globalContext";
import { addToCart } from "@/helper/frontend/util";

export const ProductCard = ({
  url,
  name,
  price,
  category,
  rating,
  _id,
  ...rest
}: IProduct) => {
  const { dispatch } = useGlobalContext();
  const onClickHandler = (e: any) => {
    e.preventDefault();
    addToCart(dispatch, { url, _id, rating, price, name, category, ...rest });
  };
  return (
    <Link href={`/shop/product/${_id}`} className="hover:shadow-md">
      <div className="w-[200px] h-[280px] flex flex-col items-center gap-4 rounded border p-5">
        <div className="relative w-[130px] aspect-square">
          <Image src={url} alt="category" fill={true} />
        </div>
        <div className="self-stretch">
          <span className="text-gray-400 text-xs">{category.name}</span>
          <h5 className="font-semibold">{name}</h5>
          <div className="my-1">
            <Rating count={rating} />
          </div>
          <div className="flex justify-between mt-5">
            <span>${price}</span>
            <button
              className="text-primary flex items-center hover:font-bold"
              type="button"
              onClick={onClickHandler}
            >
              <ShoppingCartIcon className="w-4 aspect-square" />
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
