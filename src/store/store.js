import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice.js";
import { api } from "@/services/api.js";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    lang: languageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
