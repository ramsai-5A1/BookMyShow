
const MoviesShimmer = () => {
    return (
        <div>
            <BannerShimmer/>
            <div className="flex p-2 pt-20">
                <FiltersShimmer/>
                <AllMoviesShimmer />
            </div>
        </div>
    )
};

const BannerShimmer = () => {
    return (
        <div className="py-3 px-1 flex justify-center">
            <div className=" h-72 w-3/4 rounded-xl bg-gray-300">
                
            </div>
        </div>
    )
}

const FiltersShimmer = () => {
    return (
        <div className="w-1/3 h-96 pl-20">
            
            <div className="py-6">
                <DropDownShimmer/>
                <DropDownShimmer/>
                <DropDownShimmer/>
            </div>
            
        </div>
    )
}

const AllMoviesShimmer = () => {
    return (
        <div className="w-2/3 p-2 ">
            <SubHeaderShimmer />
            <div className="grid grid-cols-1 p-2 md:grid-cols-4 space-x-2 space-y-2">
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
                <MovieCardShimmer/>
            </div>    
        </div>
    )
}

const MovieCardShimmer = () => {
    return (
        <div className="rounded-lg p-4">
            <div className="bg-gray-300 rounded-lg w-48 h-80">

            </div>
            <div className="flex flex-col space-y-2 p-1 pt-5">
                <div className="w-20 rounded-full h-2 bg-gray-300"></div>
                <div className="w-24 rounded-full h-2 bg-gray-300"></div>
                <div className="w-28 rounded-full h-2 bg-gray-300"></div>
            </div>
        </div>
    )
};

const SubHeaderShimmer = () => {
    return (
        <div className="h-52">
            <div className="flex space-x-2 py-5">
                <RoundedLabelShimmer/>
                <RoundedLabelShimmer/>
                <RoundedLabelShimmer/>
                <RoundedLabelShimmer/>
                <RoundedLabelShimmer/>
            </div>
            <ComingSoonBoxShimmer/>
        </div>
    )
}

const ComingSoonBoxShimmer = () => {
    return (
        <div className="bg-gray-300 h-16 p-4 rounded-md flex justify-between hover:cursor-pointer">
        </div>
    )
}

const RoundedLabelShimmer = () => {
    return (
        <div className="bg-gray-300 border rounded-full px-4 w-28 text-red-600 py-2 h-10">
        </div>
    )
}

const DropDownShimmer = () => {
    return (
        <div className={`bg-gray-300 shadow-lg m-3 min-h-14  p-2`}>         
        </div>
    )
}

export default MoviesShimmer;