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
              <td className="text-right">${subTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping Cost</td>
              <td className="text-right py-2">$5</td>
            </tr>
            <tr>
              <td>Vat</td>
              <td className="text-right py-2">$2</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td className="text-right py-2">0</td>
            </tr>
            <tr className="border-t">
              <td className="font-bold text-xl py-5">Total</td>
              <td className="font-bold text-xl text-right">
                ${(subTotal + 5 + 2 - 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button
          className="bg-primary text-white w-full p-3 disabled:cursor-not-allowed"
          disabled
        >
          Checkout
        </button>
      </div>
    </>
  );
};
