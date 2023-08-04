import { CartTable } from "@/components/ui/cartTable";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10 my-10 justify-between xl:px-0">
      <div className="">
        <div className="text-2xl font-semibold underline decoration-wavy">
          Products
        </div>
        <CartTable />
      </div>
      <div className=" self-stretch">
        <div className="text-2xl font-semibold underline decoration-wavy m">
          Order Summary
        </div>

        <div className="flex justify-end my-5 md:my-10">
          <table className="w-full">
            <tbody>
              <tr className="w-full">
                <td className="w-64 font-semibold py-2">Sub Total</td>
                <td className="text-right">$500</td>
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
                <td className="text-right py-2">100</td>
              </tr>
              <tr className="border-t">
                <td className="font-bold text-xl py-5">Total</td>
                <td className="font-bold text-xl">500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="bg-primary text-white w-full p-3">Checkout</button>
        </div>
      </div>
    </div>
  );
}
