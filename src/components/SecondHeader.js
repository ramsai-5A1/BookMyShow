import { Link } from "react-router-dom";

const SecondHeader = () => {
    return (
        <div className="bg-gray-100 h-10 w-full flex justify-between shadow-lg">
            <div>
                <ul className="flex px-36 py-2 space-x-3 hover:cursor-pointer">
                    <Link to="/">
                        <li>Movies</li>
                    </Link>

                    <Link to="/stream">
                        <li>Stream</li>
                    </Link>

                    <Link to="/events">
                        <li>Events</li>
                    </Link>

                    <Link to="/plays">
                        <li>Plays</li>
                    </Link>

                    <Link to="/sports">
                        <li>Sports</li>
                    </Link>

                    <Link to="/activities">
                        <li>Activities</li>
                    </Link>
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