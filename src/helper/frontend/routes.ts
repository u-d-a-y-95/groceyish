import { ReactNode } from "react";
import {
  HomeIcon,
  FireIcon,
  SwatchIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

interface INavRoutes {
  label: string;
  url: string;
  Icon: any;
}
export const navRoutes: INavRoutes[] = [
  {
    label: "Home",
    url: "/",
    Icon: HomeIcon,
  },
  {
    label: "Hot deal ",
    url: "/hot-deal",
    Icon: FireIcon,
  },
  {
    label: "Promotions",
    url: "/promotions",
    Icon: SwatchIcon,
  },
  {
    label: "Shop",
    url: "/shop",
    Icon: GiftIcon,
  },
];
