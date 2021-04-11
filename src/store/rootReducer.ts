import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "features/userSlice";
const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
