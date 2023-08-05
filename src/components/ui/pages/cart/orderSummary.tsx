"use client";
import { useGlobalContext } from "@/helper/frontend/state/globalContext";

export const OrderSummary = () => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();

  const subTotal = cart.reduce(
    (acc, item) => acc + item.count * item.item.price,
    0
  );
  return (
    <>
      <div className="text-2xl font-semibold underline decoration-wavy m">
        Order Summary
      </div>

      <div className="flex justify-end my-5 md:my-10">
        <table className="w-full">
          <tbody>
            <tr className="w-full">
              <td className="w-64 font-semibold py-2">Sub Total</td>
              <td className="text-right">${subTotal}</td>
            </tr>
            <tr>
              <td>Shipping Cost</td>
              <td className="text-right py-2">50</td>
            </tr>
            <tr>
              <td>Vat</td>
              <td className="text-right py-2">50</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td className="text-right py-2">70</td>
            </tr>
            <tr className="border-t">
              <td className="font-bold text-xl py-5">Total</td>
              <td className="font-bold text-xl">{subTotal + 50 + 50 - 70}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button className="bg-primary text-white w-full p-3">Checkout</button>
      </div>
    </>
  );
};
