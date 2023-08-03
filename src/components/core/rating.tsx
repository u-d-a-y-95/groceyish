import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as SolidStartIcon } from "@heroicons/react/24/solid";

interface IRatingProps {
  count: number;
}
export const Rating = ({ count }: IRatingProps) => {
  const a = [1, 1, 1, 1, 1];
  return (
    <div className="flex">
      {a.map((item, index) => (
        <>
          {index < count ? (
            <SolidStartIcon className="w-4 aspect-square text-yellow-400" />
          ) : (
            <StarIcon className=" w-4" />
          )}
        </>
      ))}
    </div>
  );
};
