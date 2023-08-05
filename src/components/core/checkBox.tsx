import { ChangeEvent, useEffect, useState } from "react";

export const CheckBox = ({ list, name, setValue }: any) => {
  const [state, setState] = useState<string[]>([]);
  const changeHandler = (e: any) => {
    const value = e.target.value;
    if (state.includes(value)) {
      state.splice(state.indexOf(value), 1);
    } else {
      state.push(value);
    }
    setState([...state]);
  };
  useEffect(() => {
    setValue(name, state);
  }, [state]);
  return (
    <div>
      {list &&
        list.map((item: { name: string; _id: string }, index: number) => (
          <div className="flex items-center" key={index}>
            <input
              type="checkbox"
              className=" w-4 h-4 checked:bg-secondary text-white checked:text-white"
              value={item.name}
              id={item._id}
              onChange={changeHandler}
            />
            <label className="ml-2 font-medium" htmlFor={item._id}>
              {item.name}
            </label>
          </div>
        ))}
    </div>
  );
};
