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
const FilterItem_joutaiijou_taisei: bouguKind[] = [
  "毒耐性",
  "封印耐性",
  "魅了耐性",
  "防御減耐性",
  "転び耐性",
  "踊り耐性",
  "眠り耐性",
  "混乱耐性",
  "怯え耐性",
  "幻惑耐性",
  "封印耐性",
  "守備減耐性",
  "呪い耐性",
  "即死耐性",
  "すばやさ減耐性",
];

const FilterItem_zokusei_up: bouguKind[] = [
  "メラ属性ダメージ",
  "メラ属性とくぎダメージ",
  "メラ属性じゅもんダメージ",
  "メラ属性耐性",
  "バギ属性ダメージ",
  "バギ属性とくぎダメージ",
  "バギ属性じゅもんダメージ",
  "バギ属性耐性",
  "ヒャド属性じゅもんダメージ",
  "ヒャド属性耐性",
  "ジバリア属性耐性",
  "ドルマ属性耐性",
  "ドルマ属性とくぎダメージ",
  "ギラ属性耐性",
  "ガード率",
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
        <FilterItem title={Filter_status} />
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_zokusei_attack} />
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_zokusei_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_joutaiijou_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_zokusei_up} />
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
