import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentMovieId: null
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setCurrentMovieId: (state, action) => {
            state.currentMovieId = action.payload;
        },
    },
});

export const { setCurrentMovieId } = movieSlice.actions;
export default movieSlice.reducer;