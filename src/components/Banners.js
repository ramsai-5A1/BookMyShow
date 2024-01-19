import BannerCard from "./BannerCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";



const Banners = ({ bannersData }) => {

    const settings = {
        centerMode: true,
        centerPadding: '80px',
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };

    if (!bannersData) {
        return <></>
    }

    return (
        <div>
            <Slider {...settings} className="mx-auto ">
                {bannersData.map((banner) => <BannerCard key={banner.id} cardData={banner}/>)}
            </Slider>
        </div>
    )
};

export default Banners;