import React from "react";
import { Link } from "react-router-dom";

const OneMovie = ({ movie }) => {
  const { _id, moviePoster, movieTitle, movieGenre, movieDuration, movieReleaseyear, movieRating, movieDetails } =
    movie;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={moviePoster}
            alt="Movie"
            className="h-[210px] w-[180px] rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movieTitle}</h2>
          <p>
            {movieDetails}
          </p>
          <div className="flex justify-between">
            <h3>Duration: {movieDuration}</h3>
            <h3>Release Year: {movieReleaseyear}</h3>
            <h3>Genre: {movieGenre}</h3>
          </div>
          <h1>Movie Rating: {movieRating}</h1>
          <div className="card-actions justify-end">
             <Link to={`/updateMovie/${_id}`} className="btn btn-warning">Update the Movie</Link>
            <Link to={"/movieDetails"} state={{ movie }} className="btn btn-primary">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
