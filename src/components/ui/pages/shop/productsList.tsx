"use client";
import { ProductCard } from "@/components/ui/ProductCard";
import { Laoding } from "@/components/ui/loading";
import { IProduct } from "@/helper/dtos/product.dto";

export const ProductsList = ({
  products,
  isLoading,
}: {
  products: IProduct[];
  isLoading: boolean;
}) => {
  if (isLoading) return <Laoding />;
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5  justify-items-center md:justify-items-start">
        {products.map((item: IProduct, index: number) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};
