import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";
import { kokoro, kokoroAllList } from "models";
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
  allkokoro: {
    [id in string]: kokoro;
  };
  dispKokoro: string[];
};

const initialState: initialType = {
  id: null,
  name: null,
  flg: false,
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
    filterKokoro1(state) {
      const colorFiltered = Object.keys(state.allkokoro).filter(i =>
        ["青"].includes(state.allkokoro[i].color),
      );
      state.dispKokoro = colorFiltered;
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
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const selectAll = (state: RootState) => state.user.allkokoro;
export const filterAll = (state: RootState) => state.user.dispKokoro;
