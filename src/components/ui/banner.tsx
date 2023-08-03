import Image from "next/image";
import {
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
export const Banner = () => {
  return (
    <div
      style={{
        background: "#C5EAD9 url('/img/bg-home-banner.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[300px] md:h-[350px] lg:h-[500px] relative px-5 xl:px-0"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-white opacity-40"></div>
      <div className="container mx-auto h-full flex items-center">
        <div className="w-[400px] z-10">
          <h2 className="text-3xl font-bold mt-2">
            Don’t miss our daily amazing deals.
          </h2>
          <p className="my-7 text-gray-500">
            Save up to 60% off on your first order
          </p>
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

      <div className="hidden md:block w-[400px] lg:w-[450px] xl:w-[600px] h-full absolute right-0 top-0">
        <Image fill={true} src="/img/home-banner.png" alt="banner" />
      </div>
    </div>
  );
};
