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
  "【バトマス】きようさ",
  "【バトマス】さいだいHP",
  "【バトマス】攻撃力",
  "【バトマス】守備力",
  "【レンジャー】攻撃力",
  "【レンジャー】スキルの体技ダメージ",
  "【レンジャー】守備力",
  "【レンジャー】さいだいHP",
  "【レンジャー】みかわし率",
  "【賢者】とくぎHP回復効果",
  "【賢者】スキルHP回復効果",
  "【賢者】かいふく魔力",
  "【賢者】じゅもんダメージ",
  "【賢者】魔力の暴走率",
  "【スパスタ】とくぎHP回復効果",
  "【スパスタ】スキルの体技ダメージ",
  "【スパスタ】戦闘時のハッスルダンスHP回復効果",
  "【パラディン】かいふく魔力",
  "【パラディン】さいだいHP",
  "【パラディン】じゅもんHP回復効果",
  "【パラディン】とくぎHP回復効果",
  "【パラディン】守備力",
  "【海賊】スキルの斬撃ダメージ",
  "【海賊】守備力",
  "【魔法使い】さいだいHP",
  "【魔法戦士】こうげき魔力",
  "【魔法戦士】ギラ属性ダメージ",
  "【魔法戦士】デイン属性ダメージ",
  "【魔法戦士】バギ属性ダメージ",
];

const Filter_zokusei_attack: bouguKind[] = [
  "悪魔系へのダメージ",
  "ドラゴン系へのダメージ",
  "植物系へのダメージ",
  "鳥系へのダメージ",
  "物質系へのダメージ",
];

const Filter_zokusei_taisei: bouguKind[] = [
  "悪魔系への耐性",
  "エレメント系への耐性",
  "鳥系への耐性",
  "虫系への耐性",
  "物質系への耐性",
  "水系への耐性",
  "植物系への耐性",
  "怪人系への耐性",
  "マシン系への耐性",
  "ドラゴン系への耐性",
  "ゾンビ系への耐性",
];

const FilterItem_joutaiijou_taisei: bouguKind[] = [
  "不利な状態変化耐性",
  "ブレス耐性",
  "毒耐性",
  "麻痺耐性",
  "封印耐性",
  "魅了耐性",
  "防御減耐性",
  "転び耐性",
  "踊り耐性",
  "眠り耐性",
  "混乱耐性",
  "怯え耐性",
  "幻惑耐性",
  "守備減耐性",
  "呪い耐性",
  "即死耐性",
  "すばやさ減耐性",
];

const FilterItem_zokusei_up: bouguKind[] = [
  "メラ属性ダメージ",
  "メラ属性とくぎダメージ",
  "メラ属性じゅもんダメージ",
  "ヒャド属性じゅもんダメージ",
  "ヒャド属性とくぎダメージ",
  "ヒャド属性ダメージ",
  "バギ属性ダメージ",
  "バギ属性とくぎダメージ",
  "バギ属性じゅもんダメージ",
  "ドルマ属性とくぎダメージ",
  "ドルマ属性じゅもんダメージ",
  "ドルマ属性ダメージ",
  "デイン属性じゅもんダメージ",
  "デイン属性とくぎダメージ",
  "デイン属性ダメージ",
  "ジバリア属性とくぎダメージ",
  "ジバリア属性ダメージ",
  "イオ属性じゅもんダメージ",
  "イオ属性とくぎダメージ",
  "イオ属性ダメージ",
  "【晴れ】イオ属性斬撃・体技ダメージ",
  "ギラ属性じゅもんダメージ",
  "ギラ属性とくぎダメージ",
  "ギラ属性ダメージ",
];

const FilterItem_hp_increase: bouguKind[] = [
  "ガード率",
  "魔力の暴走率",
  "ターン開始時HPを回復する",
  "ターン開始時MPを回復する",
  "【パラディン】ターン開始時にHPを回復する",
  "戦闘時のどうぐMP回復効果",
  "戦闘時のホイミHP回復効果",
  "戦闘終了時にMPを回復する",
];

const FilterItem_zokusei_taisei: bouguKind[] = [
  "メラ属性耐性",
  "イオ属性耐性",
  "ギラ属性耐性",
  "ジバリア属性耐性",
  "ヒャド属性耐性",
  "バギ属性耐性",
  "ドルマ属性耐性",
  "デイン属性耐性",
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
      <div className="items-center text-center justify-items-center mb-3">
        <p className="text-white md:text-3xl text-sm font-semibold items-center">
          防具の特殊効果をフィルタリングします。
        </p>
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_zokusei_attack} />
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_zokusei_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_zokusei_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_zokusei_up} />
      </div>
      <div className=" mb-1">
        <FilterItem title={FilterItem_joutaiijou_taisei} />
      </div>
      <div className=" mb-1">
        <FilterItem title={Filter_status} />
      </div>

      <div className=" mb-1">
        <FilterItem title={FilterItem_hp_increase} />
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
