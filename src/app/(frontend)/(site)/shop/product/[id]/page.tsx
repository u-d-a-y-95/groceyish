import { Rating } from "@/components/core/rating";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row my-10 p-10 sm:p-0 justify-center gap-10 min-h-[500px]  ">
          <div className="relative  w-[400px] h-[400px] bg-gray-100">
            <Image src="/img/category-2.png" fill={true} alt="product" />
          </div>
          <div className="flex-1 max-w-[600px]">
            <h4 className="text-primary text-4xl font-bold">
              Health Pistachios
            </h4>
            <Rating count={4} />
            <p className="my-2">
              <span className="text-gray-500 line-through text-xs">$200</span>{" "}
              <span className="text-primary ml-3 font-semibold"> $130</span>
            </p>
            <div className="mt-10 text-gray-600">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <p className="font-bold text-primary">
                Stock :
                <span className="border p-2 text-center ml-5 rounded w-24 inline-block border-primary">
                  {" "}
                  10
                </span>
              </p>
              <button className="bg-primary text-white border-0 p-2 px-6 capitalize rounded">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
