import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Main from "../layouts/Main";
import Rooms from "../components/rooms/Rooms";
import RoomDetails from "../components/rooms/RoomDetails";
import axios from "axios";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "details/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/rooms/${params.id}`),
      },
    ],
  },
]);
