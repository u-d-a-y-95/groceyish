import Link from "next/link";
import { ReactNode } from "react";

interface IBadgeButtonProps {
  Icon: any;
  label?: string;
  subTitle?: string;
  url?: string;
}
export const BadgeButton = ({
  Icon,
  label,
  subTitle,
  url = "",
}: IBadgeButtonProps) => {
  return (
    <Link href={url} className="flex gap-1 items-center">
      <div className="relative">
        <Icon className="w-7 sm:w-8 aspect-square" />
        <div className="bg-primary rounded-full w-4 h-4 absolute top-0 right-0 text-[.6rem] text-white flex justify-center items-center">
          9
        </div>
      </div>
      <div className="hidden sm:flex flex-col text-xs items-start">
        <span className="">{label}</span>
        <span className="text-primary text-[.6rem] ">{subTitle}</span>
      </div>
    </Link>
  );
};
