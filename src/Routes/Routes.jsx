import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import AddCraft from "../Components/AddCraft/AddCraft";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AllCraft from "../Components/AllCraft/AllCraft";
import ViewCraft from "../Components/AllCraft/ViewCraft";
import MyArt from "../Components/MyArt/MyArt";
import ErrorElement from "../Components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/myCraftItems",
        element: (
          <PrivateRoute>
            <MyArt></MyArt>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCraftItems/:id",
        element: (
          <PrivateRoute>
            <ViewCraft></ViewCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData/${params.id}`),
      },
      {
        path: "/allCraft",
        element: (
          <PrivateRoute>
            <AllCraft></AllCraft>
          </PrivateRoute>
        ),
        loader: () => fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData`),
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
          fetch(`${import.meta.env.VITE_SERVER_LINK}/craftData/${params.id}`),
      },
    ],
  },
]);

export default router;
