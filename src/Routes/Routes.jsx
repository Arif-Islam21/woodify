import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import AddCraft from "../Components/AddCraft/AddCraft";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AllCraft from "../Components/AllCraft/AllCraft";
import ViewCraft from "../Components/AllCraft/ViewCraft";
import CraftItems from "../Components/CraftItems/CraftItems";
import CraftCard from "../Components/CraftItems/CraftCard";

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
      {
        path: "/craftItems",
        element: <CraftItems></CraftItems>,
      },
      {
        path: "/craftItems/:id",
        element: <CraftCard></CraftCard>,
      },
      {
        path: "/allCraft",
        element: (
          <PrivateRoute>
            <AllCraft></AllCraft>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/craftData"),
      },
      // https://woodify-server.onrender.com live link from render
      {
        path: "/allCraft/:id",
        element: (
          <PrivateRoute>
            <ViewCraft></ViewCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craftData/${params.id}`),
      },
    ],
  },
]);

export default router;
