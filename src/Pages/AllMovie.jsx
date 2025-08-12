import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import OneMovie from "../Components/OneMovie";
import { DataContext } from "../provider/DataProvider";

const AllMovie = () => {
 

  const movies = useLoaderData();
  console.log(movies);

  

  return (
    <div>
      <h2 className="font-bold">Total movies: {movies.length}</h2>
            {/* <h2 className="font-bold">Total movies: {movies.length}</h2>
            <p>Movies loaded: {Array.isArray(movies) ? movies.length : 'not loaded'}</p> */}


      

      {Array.isArray(movies) && movies.length > 0 && (
        <div className="grid md:grid-cols-3 gap-2">
          {movies.map((movie) => (
            <OneMovie key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMovie;
