import { FlatProductCard } from "./flatProductCard";

interface IFlatProductHolderProps {
  products: any[];
  title: string;
}

export const FlatProductHolder = ({
  products,
  title,
}: IFlatProductHolderProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-[220px] ">
      <div className=" relative">
        <span className="border-b-2 text-2xl border-primary p-2">{title}</span>
        <div className=" absolute w-full h-2 border-b"></div>
      </div>
      <div className="flex flex-col gap-3">
        {products.map((item, index) => (
          <FlatProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
