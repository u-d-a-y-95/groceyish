"use client";
import { CartTable } from "@/components/ui/pages/cart/cartTable";
import { OrderSummary } from "@/components/ui/pages/cart/orderSummary";
import { useGlobalContext } from "@/helper/frontend/state/globalContext";
import Link from "next/link";

export default function CartPage() {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();
  if (cart.length < 1) {
    return (
      <div className="flex flex-col justify-center items-center text-4xl h-[400px] text-primary font-bold capitalize">
        No product added
        <Link href="/shop" className="underline text-sky-500 text-sm my-2">
          Go to shop
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10 my-10 justify-between xl:px-0">
      <div className="">
        <CartTable />
      </div>
      <div className=" self-stretch">
        <OrderSummary />
      </div>
    </div>
  );
}
