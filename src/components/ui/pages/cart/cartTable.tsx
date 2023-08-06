"use client";
import { REMOVE_FROM_CART } from "@/helper/frontend/state/actionType";
import { useGlobalContext } from "@/helper/frontend/state/globalContext";
import Image from "next/image";

const TH = ({ label }: any) => {
  return <th className="border p-3 px-6">{label}</th>;
};

export const CartTable = () => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();

  const addToCart = (id: string) => {
    dispatch({
      type: "ADD_TO_CART",
      value: {
        _id: id,
      },
    });
  };
  const removeFromCart = (id: string) => {
    dispatch({
      type: REMOVE_FROM_CART,
      value: id,
    });
  };

  return (
    <>
      <div className="text-2xl font-semibold underline decoration-wavy">
        Products
      </div>
      <table className="hidden md:table border my-10">
        <thead>
          <tr>
            <TH label="#" />
            <TH label="Image" />
            <TH label="Name" />
            <TH label="Stock" />
            <TH label="Price" />
            <TH label="Quantity" />
            <TH label="Total" />
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, item, count }, index: number) => (
            <tr className="border" key={index}>
              <td className="px-4">{index + 1}</td>
              <td className="p-5">
                <div className="bg-gray-100 rounded">
                  <Image src={item.url} alt="product" width={80} height={80} />
                </div>
              </td>
              <td className=" px-4">{item.name}</td>
              <td className=" px-4">{item.stock}</td>
              <td className=" px-4">${item.price}</td>
              <td className=" px-4">
                <button
                  type="button"
                  className=" border border-primary rounded  text-primary w-6"
                  onClick={(e) => removeFromCart(id)}
                >
                  -
                </button>
                <span className=" mx-2 p-2 min-w-20 inline-block">{count}</span>
                <button
                  type="button"
                  className="border-none bg-primary text-white w-6 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                  onClick={(e) => addToCart(id)}
                  disabled={item.stock <= count}
                >
                  +
                </button>
              </td>
              <td className=" px-4">${(item.price * count).toFixed(2)}</td>
            </tr>
          ))}
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
          {cart.map(({ id, item, count }, index: number) => (
            <tr className="border" key={index}>
              <td className="w-full">
                <div className="flex items-center gap-3">
                  <Image src={item.url} alt="product" width={80} height={80} />
                  <div>
                    {item.name}
                    <p>${item.price}</p>
                    <div className="">
                      <button
                        type="button"
                        className=" border border-primary rounded  text-primary w-6"
                        onClick={(e) => removeFromCart(id)}
                      >
                        -
                      </button>
                      <span className=" mx-2 p-2 min-w-20 inline-block">
                        {count}
                      </span>
                      <button
                        type="button"
                        className="border-none bg-primary text-white w-6 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onClick={(e) => addToCart(id)}
                        disabled={item.stock <= count}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </td>

              <td className=" px-4">${(item.price * count).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
