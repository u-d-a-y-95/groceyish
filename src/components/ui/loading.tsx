import Image from "next/image";

export const Laoding = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className=" absolute top-0 bg-primary left-0 right-0 bottom-0 opacity-5"></div>
      <div className="">
        <Image src="/img/spinner.gif" width={200} height={200} alt="logo" />
      </div>
    </div>
  );
};
