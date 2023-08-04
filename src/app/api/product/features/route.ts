import { NextResponse } from "next/server";

const products = [
  {
    name: "lal Shak",
    url: "/img/category-1.png",
    price: 20,
    category: "Vegetables",
    rating: 4,
  },

  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 3,
  },
  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 5,
  },
  {
    name: "lal Shak",
    url: "/img/category-1.png",
    price: 20,
    category: "Vegetables",
    rating: 4,
  },

  {
    name: "Apple",
    url: "/img/category-2.png",
    price: 20,
    category: "Fruits",
    rating: 3,
  },
];

export const GET = (request: Request) => {
  return NextResponse.json(products);
};
