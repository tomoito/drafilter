import React from "react";
import { optionFilter, acuseKind, acuse, bouguKind } from "models";

import { optionChange, filterBougu } from "features/bouguSlice";
import { useDispatch } from "react-redux";

type Props = {
  title: bouguKind[];
};

const FilterItem: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const handleClick = (filter: bouguKind) => {
    dispatch(optionChange(filter));
    dispatch(filterBougu());
  };
  return (
    <div className="overflow-x-scroll flex w-screen space-x-3 whitespace-nowrap items-center">
      {title.map(i => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          className=" bg-yellow-100 text-xs flex rounded-lg w-30 h-auto p-1 text-center items-center transform duration-150 hover:scale-110 hover:bg-gray-500 cursor-pointer mb-2">
          <p className="text-center">{i}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterItem;
