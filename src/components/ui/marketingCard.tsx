import Image from "next/image";

interface IMarketingCardProps {
  url: string;
  title: string;
  description: string;
}
export const MarketingCard = ({
  url,
  title,
  description,
}: IMarketingCardProps) => {
  return (
    <div className="flex items-center gap-6 max-w-[300px] p-5 border hover:shadow-md ">
      <div className="relative h-2/4 w-3/12">
        <Image src={url} fill={true} alt={`${title} promo`} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-thin text-gray-400 text-xs">{description}</p>
      </div>
    </div>
  );
};
