import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/PublicRoutes.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import DateProvider from "./providers/DateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <AuthProvider>
        <DateProvider>
          <RouterProvider router={routes}></RouterProvider>
        </DateProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
