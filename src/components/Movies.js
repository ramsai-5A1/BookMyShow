import { useEffect } from "react";
import MOVIES_BANNERS_LIST from "../utils/Mocks/moviesBannersList";
import Banners from "./Banners";
import { useDispatch, useSelector } from "react-redux";
import { addToMoviesList } from "../utils/Redux/MoviesSlice";
import MovieCard from "./MovieCard";
import mockMoviesList from "../utils/Mocks/moviesList";
import DropDown from "./DropDown";
import { FILTERS_KEYS, FILTERS_VALUES } from "../utils/constants";

const Movies = () => {
    const dispatch = useDispatch();
    const moviesList = useSelector((store) => store.movies.moviesList);

    useEffect(() => {
        const fetchDataFromBackend = async () => {
            const rawData = await fetch("https://dummyapi.online/api/movies");
            const data = await rawData.json();
            dispatch(addToMoviesList(mockMoviesList));
        }
        if (!moviesList) {
            fetchDataFromBackend();
        }
    }, []);

    if(!moviesList) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Banners bannersData={MOVIES_BANNERS_LIST}/>
            <div className="flex p-2 pt-20">
                <Filters/>
                <AllMovies />
            </div>
            
        </div>
    )
};

const Filters = () => {
    return (
        <div className="w-1/3 h-96 ">
            <label className="font-bold text-3xl p-2">Filters</label>
            {FILTERS_KEYS.map((key, index) => {
                return <DropDown key={key} title={key} values={FILTERS_VALUES[index]}/>
            })}
        </div>
    )
}

const AllMovies = () => {
    const moviesList = useSelector((store) => store.movies.moviesList);

    return (
        <div className="w-2/3 p-2">
            <div className="bg-gray-300 h-64">

            </div>
            <div className="flex grid grid-cols-1 p-2 md:grid-cols-4">
                {moviesList.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>    
        </div>
    )
}

export default Movies;