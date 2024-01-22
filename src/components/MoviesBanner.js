import { useEffect, useState } from "react";
import mockMoviesList from "../utils/Mocks/moviesList";

const MoviesBanner = () => {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMoviesList(mockMoviesList);
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    if (moviesList === undefined || moviesList.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <MovieRow title={"Premiere of the week"} movies={moviesList}/>
            <MovieRow title={"Upcoming Releases"} movies={moviesList}/>
            <MovieRow title={"Top 10 TV Shows"} movies={moviesList}/>
            <MovieRow title={"Free movies for you"} movies={moviesList}/>
        </div>
    )
};

const MovieRow = ({title, movies}) => {
    return (
        <div className="pl-24 p-4 pt-10">
            <h1 className="font-bold text-3xl">{title}</h1>
            <div className=" flex overflow-x-scroll">
                {movies.map(movie => <MovieCard movie={movie}/>)}
            </div>
        </div>
    )
}

const MovieCard = ({ movie }) => {
    return (
        <div className="p-2">
            <div className="w-60 h-96 rounded-lg shadow-lg">
                <img
                    alt="image"
                    src={movie.thumbnail}
                    className="w-full h-full rounded-lg shadow-lg"
                />
            </div>
        </div>
    )
}

export default MoviesBanner;