import { useEffect } from "react";
import Slider from "react-slick";

const StreamBanner = () => {

    useEffect(() => {
        const fetchBannerDataFrom = async () => {
            
        };
        fetchBannerDataFrom();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div>
            <Slider {...settings}>
                <BannerCard/>
            </Slider>
        </div>
    )
};

const BannerCard = () => {
    return (
        <div>

        </div>
    )
}

export default StreamBanner;