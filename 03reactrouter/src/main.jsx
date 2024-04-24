import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import ProfilesPage from "./ProfilesPage.jsx";
import ProfilePage from "./ProfilePage.jsx";

// the issue was I was using BrowserRouter from react-router-dom instead of createBrowserRouter from react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children:[
      {
        // dynami path
        path: "/profiles/:profileId",
        element: <ProfilePage/>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* router provider is built using the context api */}
    {/* we remove the app component and replace it with the router provider */}
    {/* we have differed entry point to router from app component */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
