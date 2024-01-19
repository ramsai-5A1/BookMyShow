import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const DropDown = ({ title, values }) => {

    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="bg-white text-red-600 min-h-14  p-2">
            <div className="flex justify-between">
                <div onClick={handleOnClick} className="hover:cursor-pointer flex p-2 items-center">
                    {clicked ? <FaAngleUp/> : <FaAngleDown/>}
                    <span className="p-2">{title}</span>
                </div>
                <span className="p-2 flex items-center">{"clear"}</span>
            </div>

            {clicked && (
                <div className="flex flex-wrap">
                    {values.map(value => <DisplayValue key={value} value={value}/>)}
                </div>
            )}
            
        </div>
    )
};

const DisplayValue = ({value}) => {
    return (
        <div className="px-0 py-3">
            <label className="p-2 m-2 border">{value}</label>
        </div>
    )
}

export default DropDown;