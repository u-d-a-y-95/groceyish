import Image from "next/image";
import Link from "next/link";
import { Rating } from "../core/rating";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface IOfferProductCardProps {
  url: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  offerLabel: string;
  offerBgColor: string;
}

export const OfferProductCard = ({
  url,
  category,
  name,
  rating,
  price,
  offerLabel,
  offerBgColor,
}: IOfferProductCardProps) => {
  return (
    <Link href={""}>
      <div className="w-[230px] h-[380px] flex flex-col items-center gap-4 rounded border p-5 relative">
        <div
          style={{ background: offerBgColor }}
          className=" absolute px-4 p-2 left-0 top-0 text-white rounded-tl rounded-br"
        >
          {offerLabel}
        </div>
        <div className="relative w-[150px] aspect-square mt-5">
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
          </div>
        </div>
        <button className="bg-primary text-white flex items-center self-stretch justify-center p-2 rounded">
          <ShoppingCartIcon className="w-4 aspect-square" />
          Add to cart
        </button>
      </div>
    </Link>
  );
};
