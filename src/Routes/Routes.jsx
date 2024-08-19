import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import AddCraft from "../Components/AddCraft/AddCraft";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
