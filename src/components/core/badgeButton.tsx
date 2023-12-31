import Link from "next/link";
import { ReactNode } from "react";

interface IBadgeButtonProps {
  Icon: any;
  label?: string;
  subTitle?: any;
  url?: string;
  count?: number;
}
export const BadgeButton = ({
  Icon,
  label,
  subTitle,
  url = "",
  count = 0,
}: IBadgeButtonProps) => {
  return (
    <Link href={url} className="flex gap-1 items-center">
      <div className="relative">
        <Icon className="w-7 sm:w-8 aspect-square" />
        {count > 0 && (
          <div className="bg-primary rounded-full w-4 h-4 absolute top-0 right-0 text-[.6rem] text-white flex justify-center items-center">
            {count}
          </div>
        )}
      </div>
      <div className="hidden sm:flex flex-col text-xs items-start">
        <span className="">{label}</span>
        {subTitle && (
          <span className="text-primary text-[.6rem] ">{subTitle}</span>
        )}
      </div>
    </Link>
  );
};
