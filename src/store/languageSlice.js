import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "lang",
  initialState: {
    value: JSON.parse(localStorage.getItem("lang")) || "en-US",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage: changeCurrentLanguage } = languageSlice.actions;
export default languageSlice.reducer;
