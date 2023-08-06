import { HomeIcon, FireIcon, GiftIcon } from "@heroicons/react/24/outline";

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
    label: "Shop",
    url: "/shop",
    Icon: GiftIcon,
  },
  {
    label: "Hot deal ",
    url: "/hot-deal",
    Icon: FireIcon,
  },
];
