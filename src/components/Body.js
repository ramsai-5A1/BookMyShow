import { Outlet } from "react-router-dom";
import FirstHeader from "./FirstHeader";
import SecondHeader from "./SecondHeader";

const Body = () => {
    return (
        <div>
            <FirstHeader/>
            <SecondHeader/>
            <Outlet/>
        </div>
    )
};

export default Body;