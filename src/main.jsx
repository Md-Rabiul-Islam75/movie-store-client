import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddMovie from './Components/AddMovie.jsx';

import Home from './Pages/Home.jsx';
import Main from './Pages/Main.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import AllMovie from './Pages/AllMovie.jsx';
import MovieDetails from './Pages/MovieDetails.jsx';
import DataProvider from './provider/DataProvider.jsx';
import FavouritePage from './Pages/FavouritePage.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import UpdateMovie from './Pages/UpdateMovie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
         
      {
        path: "/",
        element: <Home></Home>
      },
      {
       path: "/register",
       element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>
      },

      {
        path: "/updateMovie/:id",
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`) 
      },

      {
        path: "/allMovie",
        element: <AllMovie></AllMovie>,
        loader: () => fetch('http://localhost:5000/movies')
      },

      {
        path: "/movieDetails",
        element: <MovieDetails></MovieDetails>
      },

      {
        path: "/favourite",
        element: <FavouritePage></FavouritePage>
      }



    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
        <RouterProvider router={router} />
    </DataProvider>
   
  </StrictMode>,
)
