import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image src="/img/notFound.svg" fill={true} alt="not found" />
      </div>
      <Link className="text-priamry font-bold my-5" href="/">
        Return Home
      </Link>
    </div>
  );
}
