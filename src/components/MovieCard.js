
const MovieCard = ({ movie }) => {
    return (
        <div className="p-4 hover:cursor-pointer transition-transform transform hover:scale-105">
            <div className="w-48 h-84">
                <img
                    alt="thumbnail"
                    className="rounded-tl-lg rounded-tr-lg w-48 h-80"
                    src={movie.thumbnail}
                />
                <div className="h-8 rounded-bl-lg rounded-br-lg bg-black text-white flex justify-between p-1">
                    <span>{movie.rating + "/10"}</span>
                    <span>{"276K Votes"}</span>
                </div>
            </div>
            

            <div className="flex flex-col p-1 pt-5">
                <span className="font-bold">{movie.name}</span>
                <span>{"UA"}</span>
                <span>{"Telugu,Hindi,Tamil"}</span>
            </div>
        </div>
    )
};

export default MovieCard;