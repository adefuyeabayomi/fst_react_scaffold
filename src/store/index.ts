import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

// Define the RootState type
export type StoreRootState = ReturnType<typeof store.getState>;
