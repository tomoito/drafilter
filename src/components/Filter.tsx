import React from "react";
import FilterItem from "./molecure/FilterItem";

const FilterItem_skill = [
  "斬撃対技アップ",
  "メラアップ",
  "ヒャドアップ",
  "ディン1アップ",
  "ディン2アップ",
  "ディン3アップ",
  "ディン4アップ",
];
const FilterItem_taisei = [
  "即死耐性",
  "混乱耐性",
  "毒耐性",
  "休み耐性",
  "即死耐性2",
  "混乱耐性2",
  "毒耐性2",
  "休み耐性2",
];
const FilterItem_color = ["赤", "青", "黄", "紫", "緑"];

const Filter = () => {
  return (
    <div className="w-screen bg-green-400 p-10 overflow-hidden ">
      <div className="items-center text-center justify-items-center">
        <p className="text-white md:text-3xl text-sm font-semibold items-center bg-gra">
          こころ、防具、アクセサリーの特殊効果をフィルタリングします。
        </p>
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_skill} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_taisei} />
      </div>
      <div className=" mb-3">
        <FilterItem title={FilterItem_color} />
      </div>
    </div>
  );
};

export default Filter;
