import Image from "next/image";

export const Laoding = () => {
  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-primary opacity-10 flex justify-center items-center">
      <div className=" bg-white opacity-100">
        <Image src="/img/logo.png" width={100} height={20} alt="logo" />
      </div>
    </div>
  );
};
