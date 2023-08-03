import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStartIcon } from "@heroicons/react/24/solid";
import { Rating } from "../core/rating";

interface IProductCardProps {
  url: string;
  name: string;
  price: number;
  rating: number;
  category: string;
}

export const ProductCard = ({
  url,
  name,
  price,
  category,
  rating,
}: IProductCardProps) => {
  return (
    <Link href={""}>
      <div className="w-[200px] h-[300px] flex flex-col items-center gap-4 rounded border p-5">
        <div className="relative w-[150px] aspect-square">
          <Image src={url} alt="category" fill={true} />
        </div>
        <div className="self-stretch">
          <span className="text-gray-400 text-xs">{category}</span>
          <h5 className="font-semibold">{name}</h5>
          <div className="my-1">
            <Rating count={rating} />
          </div>
          <div className="flex justify-between mt-5">
            <span>${price}</span>
            <button className="text-primary flex items-center">
              <ShoppingCartIcon className="w-4 aspect-square" />
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
