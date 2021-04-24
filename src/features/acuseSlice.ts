import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";
import { kokoro, AcuseAllList, optionFilter, acuseKind, acuse } from "models";
import AcuseAll from "../../public/images/Testdata/akuse_kai.json";

const acuseList = AcuseAll as AcuseAllList;

type initialType = {
  option: acuseKind[];
  allAcuse: {
    [id in string]: acuse;
  };
  dispAcuse: string[];
};

const initialState: initialType = {
  option: [],
  allAcuse: acuseList,
  dispAcuse: [],
};

export const acuseSlice = createSlice({
  name: "acuse",
  initialState,
  reducers: {
    optionChange(state, action: PayloadAction<acuseKind>) {
      const index = state.option.findIndex(i => i === action.payload);
      const newArray =
        index === -1
          ? [...state.option, action.payload]
          : state.option.filter(n => n !== action.payload);

      state.option = newArray;

      //   : [...stationIdArray.slice(0, index), ...stationIdArray.slice(index + 1)];
    },
    filterAcuse(state) {
      const opFilter = Object.keys(state.allAcuse).filter(i => {
        const singleFil = state.option.map(x => {
          if (state.allAcuse[i].option[x]) {
            return true;
          }
          return false;
        });
        if (singleFil.length === 1) {
          return singleFil.includes(true);
        }

        return !singleFil.includes(false);
      });
      state.dispAcuse = opFilter;
    },
  },
});

// export const { filterAcuse, optionChange } = acuseSlice.actions;
// export const selectAcuse = (state: RootState) => state.acuse.option;
// export const selectAcuseAll = (state: RootState) => state.acuse.allAcuse;
// export const filterAcuseAll = (state: RootState) => state.acuse.dispAcuse;
