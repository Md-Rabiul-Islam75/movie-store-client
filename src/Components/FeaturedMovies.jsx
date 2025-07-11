import React, { useContext, useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";
import Movie from "./Movie";
import { DataContext } from "../provider/DataProvider";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  const { movies2, setMovies2 } = useContext(DataContext);

  const movieStore = useLoaderData();

  console.log(movieStore);

  //console.log(movies2);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="">
      <h2>Count of Featured Movies here: {movieStore.length}</h2>
      <p>total movie here: {movieStore.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {movieStore.slice(0, 6).map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
