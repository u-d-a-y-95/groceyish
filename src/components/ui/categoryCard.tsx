import Image from "next/image";
import Link from "next/link";

interface ICategoryCardProps {
  url: string;
  name: string;
  itemCount: number;
  color: string;
}

export const CategoryCard = ({
  url,
  name,
  itemCount,
  color,
}: ICategoryCardProps) => {
  return (
    <Link href={""}>
      <div
        style={{
          background: color,
        }}
        className="w-[100px] sm:w-[150px] h-[150px] sm:h-[200px] flex flex-col justify-center items-center gap-4 rounded"
      >
        <div className="relative w-[70px] sm:w-[100px] aspect-square">
          <Image src={url} alt="category" fill={true} />
        </div>
        <div className="text-center">
          <h5 className="font-semibold">{name}</h5>
          <span className="text-xs text-gray-400">{itemCount} items</span>
        </div>
      </div>
    </Link>
  );
};