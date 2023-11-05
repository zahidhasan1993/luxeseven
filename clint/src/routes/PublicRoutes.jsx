import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Main from "../layouts/Main";
import Rooms from "../components/rooms/Rooms";
import axios from "axios";
import BookingDetails from "../components/rooms/BookingDetails";

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
        element: <BookingDetails></BookingDetails>,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/rooms/${params.id}`),
      },
    ],
  },
]);
