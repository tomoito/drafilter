import React from "react";
type Props = {
  title: string[];
};

const FilterItem: React.FC<Props> = ({ title }) => {
  return (
    <div className="overflow-x-scroll flex w-screen space-x-3 whitespace-nowrap items-center">
      {title.map(i => (
        <div className=" bg-yellow-100 text-base flex rounded-lg w-30 h-10 p-3 text-center items-center transform duration-150 hover:scale-110 hover:bg-gray-500 cursor-pointer mb-2">
          <p className="text-center">{i}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterItem;
