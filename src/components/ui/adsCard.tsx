import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
interface IAdsCardProps {
  offerLabel: string;
  offerBgColor: string;
  title: string;
  description: string;
  buttonLabel: string;
  bgColor: string;
  url: string;
}

export const AdsCard = ({
  offerLabel,
  title,
  description,
  buttonLabel,
  bgColor,
  url,
  offerBgColor,
}: IAdsCardProps) => {
  return (
    <div
      style={{
        background: `${bgColor} url('/img/bg-home-banner.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[280px] rounded relative"
    >
      <div className="flex items-center h-full">
        <div className="px-5 sm:px-12 ">
          <span
            className="bg-[${offerBgColor}] text-white px-4 py-2 rounded"
            style={{ background: offerBgColor }}
          >
            {offerLabel}
          </span>
          <h4 className="text-2xl my-5">{title}</h4>
          <p className="text-xs text-gray-500 max-w-[200px]">{description}</p>
          <button
            type="button"
            className="bg-primary text-white px-5 py-2 flex items-center gap-3 mt-5"
          >
            {buttonLabel}
            <ArrowRightIcon className="w-4 aspect-square" />
          </button>
        </div>
      </div>
      <div className="hidden sm:block h-full w-[230px] lg:h-5/6 lg:w-[180px] xl:w-[230px] xl:h-full absolute right-0 bottom-0 ">
        <Image fill={true} src={url} alt="banner" />
      </div>
    </div>
  );
};
