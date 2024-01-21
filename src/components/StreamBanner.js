import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import MOVIES_BANNERS_LIST_2 from "../utils/Mocks/moviesBannersList2";
import { PrevArrow, NextArrow } from "./Banners";


const StreamBanner = () => {
    const [isLoading, setIsLoading] = useState(true);
    const moveSlide = useRef(null);


    useEffect(() => {
        const fetchBannerDataFrom = async () => {
            // Add a api call here so that we can fetch data from backend api
            // try {
            //     const rawData = await fetch("");
            //     if (rawData.ok) {
            //         const data = await rawData.json();
            //         setIsLoading(false);
            //     } else {
            //         throw new Error("Faild doing fetch api call");
            //     }
            // } catch (error) {
            //     setIsLoading(false);
            //     console.log(error.message);
            // }
        };
        fetchBannerDataFrom();
    }, []);

    const settings = {
        centerMode: true,
        centerPadding: '80px',
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow moveSlide={moveSlide}/>,
        nextArrow: <NextArrow moveSlide={moveSlide}/>
      };

    return (
        <div>
            <Slider ref={moveSlide} {...settings}>
                {/* <BannerCard movie={MOVIES_BANNERS_LIST_2[0]}/> */}
                {MOVIES_BANNERS_LIST_2.map(movie => <BannerCard movie={movie}/>)}
            </Slider>
        </div>
    )
};

const BannerCard = ({ movie }) => {
    return (
        <div className="">
            <div className="bg-cover bg-center bg-right p-3 flex space-x-12 w-full h-[450px] bg-black text-white"
                style={{backgroundImage: `url(${movie.backgroundImage})`}}
            >
                <div className="rounded-xl w-[40%] py-4 pl-36 h-full">
                    <img
                        alt="movie-logo"
                        src={movie.imageUrl}
                        className="w-full h-full rounded-xl"
                    />
                </div>
                

                <div>
                    <div className="flex flex-col pt-10">
                        <span>PREMIERE</span>
                        <span>Brand new releases every friday</span>
                    </div>
                    <div className="pt-6 space-y-4">
                        <span className="font-bold text-3xl">{movie.title}</span>
                        <div className="flex space-x-2">
                            <span>{movie.duration}</span>
                            <span>{movie.zenre.join(', ')}</span>
                            <span>{movie.isAdulted ? "18+" : "13+"}</span>
                        </div>
                        <div>
                            <span className="">{movie.launguage.join(', ')}</span>
                        </div>
                        <p>{movie.description.substr(0, 194)}</p>
                    </div>

                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default StreamBanner;