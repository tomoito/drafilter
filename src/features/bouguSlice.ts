import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";
import { kokoro, BouguAllList, optionFilter, bouguKind, bougu } from "models";
import bouguAll from "../../public/images/Testdata/bougu_issiki.json";

const bouguList = bouguAll as BouguAllList;
const bouguKey = Object.keys(bouguAll);

type initialType = {
  modalOpen: boolean;
  option: bouguKind[];
  allBougu: {
    [id in string]: bougu;
  };
  dispBougu: string[];
};

const initialState: initialType = {
  modalOpen: false,
  option: [],
  allBougu: bouguList,
  dispBougu: bouguKey,
};

export const bouguSlice = createSlice({
  name: "bougu",
  initialState,
  reducers: {
    setModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    optionChange(state, action: PayloadAction<bouguKind>) {
      const index = state.option.findIndex(i => i === action.payload);
      const newArray =
        index === -1
          ? [...state.option, action.payload]
          : state.option.filter(n => n !== action.payload);

      state.option = newArray;

      //   : [...stationIdArray.slice(0, index), ...stationIdArray.slice(index + 1)];
    },
    filterBougu(state) {
      const opFilter = Object.keys(state.allBougu).filter(i => {
        const singleFil = state.option.map(x => {
          if (state.allBougu[i].option[x]) {
            return true;
          }
          return false;
        });
        if (singleFil.length === 1) {
          return singleFil.includes(true);
        }

        return !singleFil.includes(false);
      });
      state.dispBougu = opFilter;
    },
  },
});

export const { filterBougu, optionChange, setModal } = bouguSlice.actions;
export const selectModal = (state: RootState) => state.bougu.modalOpen;
export const selectBougu = (state: RootState) => state.bougu.option;
export const selectBouguAll = (state: RootState) => state.bougu.allBougu;
export const filterBouguAll = (state: RootState) => state.bougu.dispBougu;
export const filterAtama = (state: RootState) =>
  state.bougu.dispBougu.filter(i => state.bougu.allBougu[i].kind === "あたま");
export const filtertate = (state: RootState) =>
  state.bougu.dispBougu.filter(i => state.bougu.allBougu[i].kind === "たて");
export const filterYoroiUe = (state: RootState) =>
  state.bougu.dispBougu.filter(i => state.bougu.allBougu[i].kind === "よろい上");
export const filterYoroiSita = (state: RootState) =>
  state.bougu.dispBougu.filter(i => state.bougu.allBougu[i].kind === "よろい下");
export const filterAcuse = (state: RootState) =>
  state.bougu.dispBougu.filter(i => state.bougu.allBougu[i].kind === "アクセサリー");
