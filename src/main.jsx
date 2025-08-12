import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMovie from "./Components/AddMovie.jsx";

import Home from "./Pages/Home.jsx";
import Main from "./Pages/Main.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AllMovie from "./Pages/AllMovie.jsx";
import MovieDetails from "./Pages/MovieDetails.jsx";
import DataProvider from "./provider/DataProvider.jsx";
import FavouritePage from "./Pages/FavouritePage.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import UpdateMovie from "./Pages/UpdateMovie.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch(
            "https://movie-store-server-six.vercel.app/movies"
          );
          const data = await res.json();
          return data;
        },
      },

      {
        path: "/aboutUs",
        element: <AboutUsPage></AboutUsPage>
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addMovie",
        element: (
             <PrivateRoute>
                 <AddMovie></AddMovie>
             </PrivateRoute>
        ) 
      },

      {
        path: "/updateMovie/:id",
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) =>
          fetch(`https://movie-store-server-six.vercel.app/movies/${params.id}`),
      },

      {
        path: "/allMovie",
        element: <AllMovie></AllMovie>,
        loader: () => fetch("https://movie-store-server-six.vercel.app/movies"),
      },

      {
        path: "/movieDetails",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/favourite",
        element: (
          <PrivateRoute>
            <FavouritePage></FavouritePage>
          </PrivateRoute>
        ) 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
