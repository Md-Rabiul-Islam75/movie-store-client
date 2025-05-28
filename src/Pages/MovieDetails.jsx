import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) return <p>No movie data found.</p>;

  return (
    <div className="p-6">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={movie.moviePoster} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.movieTitle}</h2>
          <div className="flex justify-between">
            <h3>Duration: {movie.movieDuration}</h3>
            <h3>Release Year: {movie.movieReleaseyear}</h3>
            <h3>Genre: {movie.movieGenre}</h3>
          </div>
          <h1>Movie Rating: {movie.movieRating}</h1>
          <div className="flex justify-between">
            <button className="btn bg-red-500 p-5">Delete</button>
            <button className="btn bg-green-500 p-5">Add to Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
