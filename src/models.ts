import DataSolo from "../public/images/Testdata/DataSolo.json";

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
