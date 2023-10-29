import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },
]);
