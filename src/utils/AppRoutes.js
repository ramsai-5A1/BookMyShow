import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import Movies from "../components/Movies";
import Stream from "../components/Stream";
import Events from "../components/Events";
import Plays from "../components/Plays";
import Sports from "../components/Sports";
import Activities from "../components/Activities";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        children: [
            {
                path: "/",
                element: <Movies/>,
                children: []
            },
            {
                path: "/stream",
                element: <Stream/>,
                children: []
            },
            {
                path: "/events",
                element: <Events/>,
                children: []
            },
            {
                path: "/plays",
                element: <Plays/>,
                children: []
            },
            {
                path: "/sports",
                element: <Sports/>,
                children: []
            },
            {
                path: "/activities",
                element: <Activities/>,
                children: []
            }
        ]
    }
]);

export default AppRoutes;