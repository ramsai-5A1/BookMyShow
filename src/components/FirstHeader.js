import { BOOK_MY_SHOW_LOGO_URL, CITIES_AVAILABLE, MENU_ICON } from "../utils/constants";

const FirstHeader = () => {
    return (
        <div className="w-full h-20 bg-white flex justify-between">
            <div className="pl-32 flex p-2">
                <img
                    className="h-16 "
                    alt="logo"
                    src={BOOK_MY_SHOW_LOGO_URL}
                />

                <input
                    type="text"
                    className="p-1 m-2 w-[550px] shadow-lg border h-12"
                    placeholder="🔍 Search for Movies,Events,Plays,Sports and Activities"
                />
            </div>

            <div className="items-center flex justify-between px-24">
                <select className="">
                    {CITIES_AVAILABLE.map((city) => <option key={city}>{city}</option>)}
                </select>
                <div className="px-4">
                    <button className="bg-red-500 w-24 rounded-md p-1 h-8 text-white">Sign in</button>
                </div>
                
                <div>
                    <img
                        className="w-10 h-10 p-1"
                        alt="menu"
                        src={MENU_ICON}
                    />
                </div>

            </div>
        </div>
    )
};

export default FirstHeader;