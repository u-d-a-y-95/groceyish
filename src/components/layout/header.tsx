import Image from "next/image";

import {
  HeartIcon,
  ShoppingCartIcon,
  PhoneIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import { FilterButton } from "../core/filterButton";
import Link from "next/link";
import { BadgeButton } from "../core/badgeButton";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <div>
      <div className="border-b">
        <div className="container mx-auto px-3 xl:px-0">
          <div className="flex justify-between py-4">
            <div className="">
              <Link href="/">
                <Image src="/img/logo.png" alt="logo" width={120} height={40} />
              </Link>
            </div>

            <div className="hidden">
              <FilterButton />
            </div>

            <div className="flex gap-3 sm:gap-10">
              <BadgeButton Icon={HeartIcon} label="Wishlist" />
              <BadgeButton
                Icon={ShoppingCartIcon}
                label="My Cart"
                subTitle="200"
                url="/cart"
              />
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 aspect-square rounded-full relative bg-gray-300">
                  {/* <Image src="/img/logo.png" alt="logo" fill={true} /> */}
                </div>
                <span>Saiful Islam</span>
              </div>
              <button className="sm:hidden">
                <Bars4Icon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex container mx-auto  justify-between py-4  px-3 xl:px-0 border-b">
        <Navbar />
        <div className="text-primary flex items-center">
          <PhoneIcon className="w-4 aspect-square" />
          <span>1233-7777</span>
          <span className="ml-1 lg:ml-3 text-xs text-secondary">
            24/7 support center
          </span>
        </div>
      </div>
    </div>
  );
};
