import { RouterProvider } from "react-router-dom";
import "./App.css"
import AppRoutes from "./utils/AppRoutes";
import { Provider } from "react-redux";
import AppDataStore from "./utils/Redux/AppDataStore";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Provider store={AppDataStore}>
        <RouterProvider router={AppRoutes} />
      </Provider>
    </div>
  )
};

export default App;