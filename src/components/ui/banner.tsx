import Image from "next/image";
import {
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

interface IBannerProps {
  title: string;
  description?: string;
  url?: string;
  bgColor?: string;
}

export const Banner = ({
  title,
  description,
  url,
  bgColor = "#C5EAD9",
}: IBannerProps) => {
  return (
    <div
      style={{
        background: `${bgColor} url('/img/bg-home-banner.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[300px] md:h-[350px] lg:h-[500px] relative px-5 xl:px-0"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-white opacity-40"></div>
      <div className="container mx-auto h-full flex items-center">
        <div className="w-[400px] z-10">
          <h2 className="text-3xl font-bold mt-2">{title}</h2>
          <p className="my-7 text-gray-500">{description}</p>
          <div className="mt-8 flex bg-white max-w-[350px]">
            <div className="p-2 ">
              <RocketLaunchIcon className="w-4 aspect-square" />
            </div>
            <input
              placeholder="Enter your email address"
              className="flex-1 outline-none"
            />
            <button className="bg-primary text-white p-2 rounded-e max-w-[120px] ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {url && (
        <div className="hidden md:block w-[400px] lg:w-[450px] xl:w-[600px] h-full absolute right-0 top-0">
          <Image fill={true} src={url} alt="banner" />
        </div>
      )}
    </div>
  );
};
