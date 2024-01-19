
const BannerCard = ({ cardData }) => {
    return (
        <div className="py-3 px-1">
            <div className=" h-72 rounded-xl bg-gray-300">
                <img
                    className="h-72 w-full rounded-xl"
                    alt="single-banner"
                    src={cardData.imageUrl}
                />
            </div>
        </div>
    )
};

export default BannerCard;