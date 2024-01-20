import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";
import userReducer from "./UserSlice";

const AppDataStore = configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer
    }
});

export default AppDataStore;