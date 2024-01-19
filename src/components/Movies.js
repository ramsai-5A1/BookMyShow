import { useEffect } from "react";
import MOVIES_BANNERS_LIST from "../utils/Mocks/moviesBannersList";
import Banners from "./Banners";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMoviesList } from "../utils/Redux/MoviesSlice";

const Movies = () => {
    const dispatch = useDispatch();
    const moviesList = useSelector((store) => store.movies.moviesList);

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            const rawData = await fetch("https://dummyapi.online/api/movies");
            const data = await rawData.json();
            dispatch(addToMoviesList(data));
        }
        if (!moviesList) {
            fetchDataFromBackend();
        }
    }, []);

    return (
        <div>
            <Banners bannersData={MOVIES_BANNERS_LIST}/>
        </div>
    )
};

export default Movies;