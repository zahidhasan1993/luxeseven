import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Main from "../layouts/Main";
import Rooms from "../components/rooms/Rooms";
import axios from "axios";
import BookingDetails from "../components/rooms/BookingDetails";
import Register from "../components/authentication/Register";
import Login from "../components/authentication/Login";
import PrivateRoute from "./PrivateRoute";
import UserDash from "../components/dashboard/UserDash";
import AdminDash from "../components/dashboard/AdminDash";
import AdminRoute from "./AdminRoute";

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
        element: (
          <PrivateRoute>
            <Rooms></Rooms>
          </PrivateRoute>
        ),
      },

      {
        path: "details/:id/:checkIn/:checkOut",
        element: (
          <PrivateRoute>
            <BookingDetails></BookingDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "dashboard/user",
        element: (
          <PrivateRoute>
            <UserDash></UserDash>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/admin",
        element: (
          <AdminRoute>
            <AdminDash></AdminDash>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
