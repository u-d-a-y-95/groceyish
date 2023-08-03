import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export const FilterButton = () => {
  return (
    <div className="flex gap-3 bg-gray-100 rounded items-center">
      <select className="bg-transparent p-2">
        <option>Vegetables</option>
        <option>Fruits</option>
        <option>Nuts</option>
        <option>Oil</option>
      </select>
      <div className="border h-2/4 border-gray-400"></div>
      <input
        className="bg-transparent min-w-[300px] p-2  border-gray-300 outline-none"
        placeholder="Seacrh for items..."
      />
      <button className="bg-primary text-white p-2 rounded-e">
        <MagnifyingGlassIcon className="w-5 aspect-square" />
      </button>
    </div>
  );
};
