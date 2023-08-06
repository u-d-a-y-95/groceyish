import Image from "next/image";
import Link from "next/link";
import { Rating } from "../core/rating";

interface IFlatProductCardProps {
  url: string;
  name: string;
  price: number;
  rating: number;
}

export const FlatProductCard = ({
  url,
  name,
  price,
  rating,
}: IFlatProductCardProps) => {
  return (
    <Link href={""}>
      <div className="w-full sm:w-[250px] h-[100px] flex items-center gap-3 rounded">
        <div className="relative w-[80px] aspect-square bg-gray-100 rounded">
          <Image src={url} alt="category" fill={true} />
        </div>
        <div className="">
          <h5 className="font-semibold">{name} 1kg</h5>
          <div className="my-1">
            <Rating count={rating} />
          </div>
          <div className="flex justify-between mt-3 text-primary">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
