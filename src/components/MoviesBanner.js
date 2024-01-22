import { useEffect, useState } from "react";
import mockMoviesList from "../utils/Mocks/moviesList";
import Footer from "./Footer";

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
            <Footer/>
        </div>
    )
};

const MovieRow = ({title, movies}) => {
    const AlongWithLabel = WithLabel(MovieCard);


    return (
        <div className="pl-24 p-4 pt-10">
            <h1 className="font-bold text-3xl">{title}</h1>
            <div className=" flex overflow-x-scroll">
                {movies.map(movie => <AlongWithLabel movie={movie}/>)}
            </div>
            
        </div>
    )
}

const WithLabel = (MovieCard) => {
    return (props) => {
        return (
            <div>
                <MovieCard {...props}/>
                <div className="flex items-center ">
                    <div className="rounded-lg shadow-lg w-60 h-10 p-2  bg-red-400 text-white">PREMIERE</div>
                </div>
            </div>
        )   
    }
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