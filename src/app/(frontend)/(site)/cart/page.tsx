import Image from "next/image";

const TH = ({ label }: any) => {
  return <th className="border p-3 px-6">{label}</th>;
};

export default function CartPage() {
  return (
    <div className="flex flex-col sm:flex-row p-5 gap-10 container mx-auto justify-between my-10">
      <div>
        <div className=" text-2xl font-semibold underline decoration-wavy">
          Products
        </div>
        <table className="border my-10">
          <thead>
            <tr>
              <TH label="#" />
              <TH label="Image" />
              <TH label="Name" />
              <TH label="Price" />
              <TH label="Quantity" />
              <TH label="Total" />
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="px-4">1</td>
              <td className="p-5">
                <div className="bg-gray-100 rounded">
                  <Image
                    src="/img/category-1.png"
                    alt="product"
                    width={80}
                    height={80}
                  />
                </div>
              </td>
              <td className=" px-4">Health Pistachios</td>
              <td className=" px-4">$250</td>
              <td className=" px-4">
                <button className=" border border-primary rounded  text-primary w-6">
                  -
                </button>
                <span className=" mx-2 p-2 min-w-20 inline-block">2</span>
                <button className="border-none bg-primary text-white w-6 rounded">
                  +
                </button>
              </td>
              <td className=" px-4">$500</td>
            </tr>
            <tr className="border">
              <td className="px-4">1</td>
              <td className="p-5">
                <div className="bg-gray-100 rounded">
                  <Image
                    src="/img/category-2.png"
                    alt="product"
                    width={80}
                    height={80}
                  />
                </div>
              </td>
              <td className=" px-4">Health Pistachios</td>
              <td className=" px-4">$250</td>
              <td className=" px-4">
                <button className=" border border-primary rounded  text-primary w-6">
                  -
                </button>
                <span className=" mx-2 p-2 min-w-20 inline-block">2</span>
                <button className="border-none bg-primary text-white w-6 rounded">
                  +
                </button>
              </td>
              <td className=" px-4">$500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="text-2xl font-semibold underline decoration-wavy">
          Order Summary
        </div>

        <div className="flex justify-end my-10">
          <table>
            <tbody>
              <tr>
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
