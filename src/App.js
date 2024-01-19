import { RouterProvider } from "react-router-dom";
import "./App.css"
import AppRoutes from "./utils/AppRoutes";

const App = () => {
  return (
    <div className="bg-gray-100">
      <RouterProvider router={AppRoutes} />
    </div>
  )
};

export default App;