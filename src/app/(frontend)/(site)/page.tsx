import { ProductCard } from "@/components/ui/ProductCard";
import { AdsCard } from "@/components/ui/adsCard";
import { Banner } from "@/components/ui/banner";
import { CategoryCard } from "@/components/ui/categoryCard";
import { FlatProductCard } from "@/components/ui/flatProductCard";
import { FlatProductHolder } from "@/components/ui/flatProductHolder";
import { OfferProductCard } from "@/components/ui/offerProductCard";

const categories = [
  {
    name: "Vegitables",
    url: "/img/category-1.png",
    itemCount: 20,
    color: "#DEF9EC",
  },
  {
    name: "Fruits",
    url: "/img/category-2.png",
    itemCount: 200,
    color: "#FEEFEA",
  },
  {
    name: "Fruits",
    url: "/img/category-2.png",
    itemCount: 200,
    color: "#FEEFEA",
  },
];
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
];
const offerProducts = [
  {
    name: "lal Shak",
    url: "/img/category-1.png",
    price: 20,
    category: "Vegetables",
    rating: 4,
    offerLabel: "Save 10%",
    offerBgColor: "#FFD480",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto py-10 px-5 xl:px-0">
        <div>
          <h4 className="text-2xl py-7">Explore Categories</h4>
        </div>
        <div className="flex gap-5 flex-wrap">
          {categories.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="container mx-auto py-10 px-5 xl:px-0">
        <div>
          <h4 className="text-2xl py-7">Featured Products</h4>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  justify-items-center md:justify-items-start">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-10 my-20">
          <AdsCard
            offerLabel="Free delivery"
            title="Free delivery over $50 "
            description="Shop $50 product and get free delivery anywhre."
            buttonLabel="Shop Now"
            bgColor="#FFF5E1"
            url="/img/ads-1.png"
            offerBgColor="#FFD480"
          />
          <AdsCard
            offerLabel="60% off"
            title="Organic Food "
            description="Save up to 60% off on your first order"
            buttonLabel="Order Now"
            bgColor="#D2EFE1"
            url="/img/ads-2.png"
            offerBgColor="#3BB77E"
          />
        </div>
        <div>
          <h4 className="text-2xl py-7">Daily Best Sells</h4>
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  justify-items-center md:justify-items-start">
            {offerProducts.map((item, index) => (
              <OfferProductCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-16">
          <FlatProductHolder products={products} title="Top Sell" />
          <FlatProductHolder products={products} title="Top Rated" />
          <FlatProductHolder products={products} title="Trending Items" />
          <FlatProductHolder products={products} title="Recently Added" />
        </div>
      </div>
    </main>
  );
}
