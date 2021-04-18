import React from "react";

const FilterItem = ["頭", "上着", "下", "盾", "アクセサリー", "こころ"];

const FilterKind = () => {
  return (
    <div className="border-b ">
      <p className="font-mono text-base text-center">Filter</p>

      <ul className="flex flex-row md:flex-col whitespace-nowrap">
        {FilterItem.map(i => (
          <li
            key={i}
            className="p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
            <p>{i}</p>
          </li>
        ))}
        <li>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default FilterKind;
