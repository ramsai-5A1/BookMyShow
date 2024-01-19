import MOVIES_BANNERS_LIST from "../utils/Mocks/moviesBannersList";
import Banners from "./Banners";

const Movies = () => {
    return (
        <div>
            <Banners bannersData={MOVIES_BANNERS_LIST}/>
        </div>
    )
};

export default Movies;