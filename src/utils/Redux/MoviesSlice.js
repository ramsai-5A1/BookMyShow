import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: null
    },
    reducers: {
        addToMoviesList: (state, action) => {
            state.moviesList = action.payload;
        }
    }
});


export const { addToMoviesList } = MoviesSlice.actions;
export default MoviesSlice.reducer;