import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";

const AppDataStore = configureStore({
    reducer: {
        movies: moviesReducer
    }
});

export default AppDataStore;