import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "features/userSlice";
import { acuseSlice } from "features/acuseSlice";
import { bouguSlice } from "features/bouguSlice";
const rootReducer = combineReducers({
  user: userSlice.reducer,
  // acuse: acuseSlice.reducer,
  bougu: bouguSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
