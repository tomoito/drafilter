import React from "react";
import FilterItem from "./molecure/FilterItem";
import { optionFilter, acuseKind, acuse } from "models";
import { bouguKind } from "models";
import { filterBougu, optionChange, selectBougu } from "features/bouguSlice";
import { useDispatch, useSelector } from "react-redux";
import Badge from "./atom/Badge";

const Filter_status: bouguKind[] = [
  "攻撃力",
  "守備力",
  "攻撃魔力",
  "すばやさ",
  "きようさ",
  "さいだいHP",
  "さいだいMP",
  "【バトマス】スキルの斬撃ダメージ",
  "【パラディン】守備力",
  "【レンジャー】スキルの体技ダメージ",
  "【賢者】とくぎHP回復効果",
  "【賢者】スキルHP回復効果",
];

const Filter_zokusei_attack: bouguKind[] = [
  "悪魔系へのダメージ",
  "ドラゴン系へのダメージ",
  "植物系へのダメージ",
  "鳥系へのダメージ",
];

const Filter_zokusei_taisei: bouguKind[] = [
  "鳥系への耐性",
  "究極エビルプリーストへの耐性",
  "虫系への耐性",
  "物質系への耐性",
  "水系への耐性",
  "植物系への耐性",
  "悪魔系への耐性",
  "怪人系への耐性",
  "マシン系への耐性",
  "ドラゴン系への耐性",
];

const FilterItem_bougu: bouguKind[] = [
  "すばやさ",
  "攻撃魔力",
  "究極エビルプリーストへの耐性",
];
const FilterItem_test3: bouguKind[] = ["鳥系への耐性", "植物系への耐性", "ギラ属性耐性"];
const FilterItem_test: bouguKind[] = [
  "毒耐性",
  "ギラ属性とくぎダメージ",
  "悪魔系への耐性",
  "斬撃・体技耐性",
  "不利な状態変化耐性",
  "ドラゴン系への耐性",
  "【バトマス】攻撃力",
];
const FilterItem_test2: bouguKind[] = [
  "暴嵐の四天王への耐性",
  "【スパスタ】とくぎHP回復効果",
  "【レンジャー】スキルの体技ダメージ",
  "※確認でき次第掲載予定です",
  "【パラディン】ターン開始時にHPを5回復する",
  "魔力の暴走率",
  "さいだいHP",
  "じゅもん耐性",
  "イオ属性耐性",
];
const FilterItem_color = ["赤", "青", "黄", "紫", "緑"];

const Filter = () => {
  const selector = useSelector(selectBougu);
  const dispatch = useDispatch();

  const handleClick = (e: bouguKind) => {
    dispatch(optionChange(e));
    dispatch(filterBougu());
  };

  return (
    <div className="w-screen bg-green-400 p-10 overflow-hidden ">
      <div className="items-center text-center justify-items-center">
        <p className="text-white md:text-3xl text-sm font-semibold items-center bg-gra">
          こころ、防具、アクセサリーの特殊効果をフィルタリングします。
        </p>
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_zokusei_attack} />
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_zokusei_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_test} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_test2} />
      </div>

      <div className="flex space-x-1">
        {selector.map(i => (
          <div key={i}>
            <Badge id={i} handleChangeBase={() => handleClick(i)}></Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
