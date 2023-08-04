import Image from "next/image";

const TH = ({ label }: any) => {
  return <th className="border p-3 px-6">{label}</th>;
};

export const CartTable = () => {
  return (
    <>
      {" "}
      <table className="hidden md:table border my-10">
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
      <table className="md:hidden border my-5">
        <thead>
          <tr>
            <TH label="Product" />
            <TH label="Total" />
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="w-full">
              <div className="flex items-center gap-3">
                <Image
                  src="/img/category-1.png"
                  alt="product"
                  width={80}
                  height={80}
                />
                <div>
                  Health Pistachios
                  <p>$250</p>
                  <div className="">
                    <button className=" border border-primary rounded  text-primary w-6">
                      -
                    </button>
                    <span className=" mx-2 p-2 min-w-20 inline-block">2</span>
                    <button className="border-none bg-primary text-white w-6 rounded">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </td>

            <td className=" px-4">$500</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
