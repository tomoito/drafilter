import React from "react";

type Props = {
  title: string[];
};

const FilterList: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-screen overflow-x-scroll  rounded-lg">
      <ul className="flex p-2 text-base font-mono text-white space-x-4  whitespace-nowrap">
        {title.map(i => (
          <li className="border rounded-lg transform duration-150 hover:scale-125 cursor-pointer hover:bg-gray-500 px-3 py-2">
            <p>{i}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
