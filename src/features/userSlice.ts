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
};

const initialState: initialType = {
  id: null,
  name: null,
  flg: false,
  allkokoro: kokoroList,
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
  },
});

export const { changeName, changeFlg } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const selectAll = (state: RootState) => state.user.allkokoro;
