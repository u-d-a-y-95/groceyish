import { AdsCard } from "@/components/ui/adsCard";
import { Banner } from "@/components/ui/banner";
import { FeatureProducts } from "@/components/ui/featureProduct";
import { FlatProductHolder } from "@/components/ui/flatProductHolder";
import { OfferProductCard } from "@/components/ui/offerProductCard";
import { CategoryHolder } from "@/components/ui/pages/home/categoryHolder";

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
      <Banner
        title="Don’t miss our daily amazing deals."
        description="Save up to 60% off on your first order"
        url="/img/home-banner.png"
      />
      <CategoryHolder />
      <FeatureProducts />
      <div className="container mx-auto py-10 px-5 xl:px-0">
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
      {/* <Banner
        title="Shop Faster With Groceyish App"
        description="Available on both IOS & Android"
        // url="/img/home-banner-1.png"
        bgColor="#FFD480"
      /> */}
    </main>
  );
}
