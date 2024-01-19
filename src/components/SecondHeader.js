
const SecondHeader = () => {
    return (
        <div className="bg-gray-100 h-10 w-full flex justify-between shadow-lg">
            <div>
                <ul className="flex px-36 py-2 space-x-3 hover:cursor-pointer">
                    <li>Movies</li>
                    <li>Stream</li>
                    <li>Events</li>
                    <li>Plays</li>
                    <li>Sports</li>
                    <li>Activities</li>
                </ul>
            </div>

            <div>
                <ul className="flex space-x-3 pr-28 p-2 hover:cursor-pointer">
                    <li>ListYourShow</li>
                    <li>Corporates</li>
                    <li>Offers</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            
        </div>
    )
};

export default SecondHeader;