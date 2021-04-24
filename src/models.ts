import DataSolo from "../public/images/Testdata/DataSolo.json";

// アクセサリー
import AcuseData from "../public/images/Testdata/akuse_solo.json";
import bouguData from "../public/images/Testdata/bougu_solo_kai.json";

type status = typeof DataSolo;
//color
export type colorKind = "赤" | "青" | "紫" | "黄" | "緑";

// 1)心
type typeKokoroBefore<T, type1, type2, type3> = {
  [K in keyof T]: K extends type1
    ? Partial<
        {
          [X in keyof T[K]]?: number;
        }
      >
    : K extends type2
    ? type3
    : T[K];
};

export type kokoro = typeKokoroBefore<status, "option", "color", colorKind>;
export type kokoroAllList = {
  [id in string]: kokoro;
};

// Option
type PickType<T, K extends keyof T> = T[K];
export type optionFilterBefore = PickType<status, "option">;
type PickTypeBase<T, TYPE> = { [P in keyof T]: TYPE };
export type optionFilter = PickTypeBase<optionFilterBefore, boolean>;
export type optionKind = keyof optionFilter;

//akuse
type status_acuse = typeof AcuseData;

export type realityKind = "1" | "2" | "3" | "4" | "5";
type typeAcuseBefore<T, type1, type2, type3> = {
  [K in keyof T]: K extends type1
    ? Partial<
        {
          [X in keyof T[K]]?: string;
        }
      >
    : K extends type2
    ? type3
    : T[K];
};

export type acuse = typeAcuseBefore<status_acuse, "option", "reality", realityKind>;
export type AcuseAllList = {
  [id in string]: acuse;
};

export type acuseFilterBefore = PickType<acuse, "option">;
export type option_Acuce_Filter = PickTypeBase<acuseFilterBefore, boolean>;
export type acuseKind = keyof option_Acuce_Filter;

//bougu
type status_bougu = typeof bouguData;
export type BouguKind = "たて" | "あたま" | "よろい上" | "よろい下" | "アクセサリー";

type typeBouguBefore<T, type1, type2, type3, type4, type5> = {
  [K in keyof T]: K extends type1
    ? Partial<
        {
          [X in keyof T[K]]?: string;
        }
      >
    : K extends type2
    ? type3
    : K extends type4
    ? type5
    : T[K];
};

export type bougu = typeBouguBefore<
  status_bougu,
  "option",
  "reality",
  realityKind,
  "kind",
  BouguKind
>;
export type BouguAllList = {
  [id in string]: bougu;
};

export type bouguFilterBefore = PickType<bougu, "option">;
export type option_Bcuce_Filter = PickTypeBase<bouguFilterBefore, boolean>;
export type bouguKind = keyof option_Bcuce_Filter;
