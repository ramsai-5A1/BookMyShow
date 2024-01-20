import { useEffect } from "react";
import MOVIES_BANNERS_LIST from "../utils/Mocks/moviesBannersList";
import Banners from "./Banners";
import { useDispatch, useSelector } from "react-redux";
import { addToMoviesList } from "../utils/Redux/MoviesSlice";
import MovieCard from "./MovieCard";
import mockMoviesList from "../utils/Mocks/moviesList";
import DropDown from "./DropDown";
import { FILTERS_KEYS, FILTERS_VALUES, LANGUAGES_AVAILABLE } from "../utils/constants";
import { FaAngleRight } from "react-icons/fa";


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
        <div className="bg-gray-100">
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
        <div className="w-1/3 h-96 pl-20">
            <label className="font-bold text-3xl p-2">Filters</label>
            <div className="py-6">
                {FILTERS_KEYS.map((key, index) => {
                    return <DropDown key={key} title={key} values={FILTERS_VALUES[index]}/>
                })}
            </div>
            
        </div>
    )
}

const AllMovies = () => {
    const moviesList = useSelector((store) => store.movies.moviesList);

    return (
        <div className="w-2/3 p-2 ">
            <SubHeader />
            <div className="grid grid-cols-1 p-2 md:grid-cols-4 space-x-2 space-y-2">
                {moviesList.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>    
        </div>
    )
}

const SubHeader = () => {
    const location = useSelector((store) => store.user.location);

    return (
        <div className=" h-52">
            <label className="font-bold text-3xl">Movies In {location}</label>
            <div className="flex p-2 space-x-2 py-6">
                {LANGUAGES_AVAILABLE.map(value => <RoundedLabel key={value} value={value}/>)}
            </div>
            <ComingSoonBox />
        </div>
    )
}

const RoundedLabel = ({ value }) => {
    return (
        <div className="bg-white border hover:cursor-pointer hover:bg-gray-200 rounded-full px-4 w-auto text-red-600 py-2 h-10">
            <label>{value}</label>
        </div>
    )
}

const ComingSoonBox = () => {
    return (
        <div className="bg-white p-4 rounded-md flex justify-between hover:cursor-pointer">
            <label className="font-bold text-xl">Coming Soon</label>
            
            <div className="text-red-700 flex items-center p-1 space-x-1">
                <label className="">Explore Upcoming Movies</label>
                <FaAngleRight/>
            </div>
        </div>
    )
}

export default Movies;