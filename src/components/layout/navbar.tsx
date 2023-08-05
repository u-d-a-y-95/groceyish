"use client";
import { navRoutes } from "@/helper/frontend/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="flex gap-4 lg:gap-10">
        {navRoutes.map((item, index) => (
          <li
            key={index}
            className={pathname === item.url ? "text-primary font-bold" : ""}
          >
            <Link
              className="flex gap-1 xl:gap-2 hover:text-primary"
              href={item.url}
            >
              <item.Icon className="w-4 aspect-square" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
