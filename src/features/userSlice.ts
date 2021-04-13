import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";
import { kokoro, kokoroAllList, optionFilter, optionKind } from "models";
import DoraAll from "../../public/images/Testdata/dqwalkAll3.json";

const kokoroList = DoraAll as kokoroAllList;

export type User = {
  id: number | null;
  name: string | null;
  flg: boolean;
};

type initialType = {
  id: number | null;
  name: string | null;
  flg: boolean;
  option: optionKind[];
  allkokoro: {
    [id in string]: kokoro;
  };
  dispKokoro: string[];
};

const initialState: initialType = {
  id: null,
  name: null,
  flg: false,
  option: [],
  allkokoro: kokoroList,
  dispKokoro: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<Pick<User, "name">>) {
      state.name = action.payload.name;
    },
    changeFlg(state) {
      state.flg = !state.flg;
    },
    optionChange(state, action: PayloadAction<optionKind>) {
      const index = state.option.findIndex(i => i === action.payload);
      const newArray =
        index === -1
          ? [...state.option, action.payload]
          : state.option.filter(n => n !== action.payload);

      state.option = newArray;

      //   : [...stationIdArray.slice(0, index), ...stationIdArray.slice(index + 1)];
    },
    filterKokoro1(state) {
      const opFilter = Object.keys(state.allkokoro).filter(i => {
        const singleFil = state.option.map(x => {
          if (state.allkokoro[i].option[x]) {
            return true;
          }
          return false;
        });
        if (singleFil.length === 1) {
          return singleFil.includes(true);
        }

        return !singleFil.includes(false);
      });
      state.dispKokoro = opFilter;
    },

    filterKokoro2(state) {
      const colorFiltered = Object.keys(state.allkokoro).filter(i =>
        ["赤"].includes(state.allkokoro[i].color),
      );
      state.dispKokoro = colorFiltered;
    },
    filterKokoro3(state) {
      const colorFiltered = Object.keys(state.allkokoro).filter(i =>
        ["緑"].includes(state.allkokoro[i].color),
      );
      state.dispKokoro = colorFiltered;
    },
  },
});

export const {
  changeName,
  changeFlg,
  filterKokoro1,
  filterKokoro2,
  filterKokoro3,
  optionChange,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const selectAll = (state: RootState) => state.user.allkokoro;
export const filterAll = (state: RootState) => state.user.dispKokoro;
