import BannerCard from "./BannerCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";


export const PrevArrow = ({moveSlide}) => {
    return (
        <button 
            onClick={() => moveSlide.current.slickPrev()} 
            className="hover:cursor-pointer absolute z-10 top-36 p-2 rounded-tr-lg rounded-br-lg w-10 h-10 bg-black opacity-25 hover:opacity-100 text-white">
                <FaAngleLeft/>
            </button>
    )
};

export const NextArrow = ({moveSlide}) => {
    return (
        <button 
            onClick={() => moveSlide.current.slickNext()} 
            className="hover:cursor-pointer absolute z-10 right-0 top-36 p-2 rounded-bl-lg rounded-tl-lg w-10 h-10 bg-black hover:opacity-100 opacity-25 text-white">
                <FaAngleRight/>
            </button>
    )
};



const Banners = ({ bannersData }) => {

    const moveSlide = useRef(null);

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

    if (!bannersData) {
        return <></>
    }

    return (
        <div>
            <Slider ref={moveSlide} {...settings} className="mx-auto relative">
                {bannersData.map((banner) => <BannerCard key={banner.id} cardData={banner}/>)}
            </Slider>
        </div>
    )
};

export default Banners;