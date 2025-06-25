import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { id, moviePoster, movieTitle, movieGenre, movieDuration, movieReleaseyear, movieRating } =
    movie;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={moviePoster}
            alt="Movies"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movieTitle}</h2>
          <p>
            {movieGenre}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Update the Movie</button>
            <Link to={"/movieDetails"} state={{movie}} className="btn btn-primary">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
