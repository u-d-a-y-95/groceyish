import Image from "next/image";
import { MarketingCard } from "../ui/marketingCard";
import {
  PhoneIcon,
  HomeIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const promos = [
  {
    url: "/img/promo-1.png",
    title: "Best Prices & Deals",
    description: "Don’t miss our daily amazing deals and prices",
  },
  {
    url: "/img/promo-2.png",
    title: "Refundable",
    description: "If your items have damage we agree to refund it",
  },
  {
    url: "/img/promo-3.png",
    title: "Free delivery",
    description: "Do purchase over $50 and get free delivery anywhere",
  },
];
export const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center border-b py-10 gap-10 px-5">
        {promos.map((item, index) => (
          <MarketingCard {...item} key={index} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-10 text-xs py-16 justify-between border-b px-5">
        <div>
          <div className="">
            <Image src="/img/logo.png" alt="logo" width={120} height={40} />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-2">
              <HomeIcon className="w-4 aspect-square text-primary" />
              <p className="">
                Address:
                <span className="text-gray-700 ml-1 font-thin">
                  1762 School House Road
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <PhoneIcon className="w-4 aspect-square text-primary" />
              <p className="">
                Call Us:
                <span className="text-gray-700 ml-1 font-thin">1233-777</span>
              </p>
            </div>
            <div className="flex gap-2">
              <EnvelopeIcon className="w-4 aspect-square text-primary" />
              <p className="">
                Email:
                <span className="text-gray-700 ml-1 font-thin">
                  uday.dev.bd@gmail.com
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <ClockIcon className="w-4 aspect-square text-primary" />
              <p className="">
                Work hours::
                <span className="text-gray-700 ml-1 font-thin">
                  8:00 - 20:00, Sunday - Thursday
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Account</div>
          <div className="flex flex-col gap-5 mt-7">
            <Link href="">Wishlist</Link>
            <Link href="">Cart</Link>
            <Link href="">Track Order</Link>
            <Link href="">Shipping Details</Link>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Useful links</div>
          <div className="flex flex-col gap-5 mt-7">
            <Link href="">About us</Link>
            <Link href="">Contact</Link>
            <Link href="">Hot deals</Link>
            <Link href="">Promotions</Link>
            <Link href="">New Product</Link>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Help center</div>
          <div className="flex flex-col gap-5 mt-7">
            <Link href="">Payment</Link>
            <Link href="">Refund</Link>
            <Link href="">Q&A </Link>
            <Link href="">Privacy & Policy </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-5 px-5 gap-5">
        <span>© 2022, All rights reserved</span>
        <Image src="/img/payment.png" alt="payment" width={180} height={5} />
        <div className="flex gap-3">
          <button type="button">
            <Image
              src="/img/logo-fb.png"
              alt="fb-button"
              width={30}
              height={30}
            />
          </button>
          <button type="button">
            <Image
              src="/img/logo-link.png"
              alt="fb-button"
              width={30}
              height={30}
            />
          </button>
          <button type="button">
            <Image
              src="/img/logo-ins.png"
              alt="fb-button"
              width={30}
              height={30}
            />
          </button>
          <button type="button">
            <Image
              src="/img/logo-twt.png"
              alt="fb-button"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
