import React from "react";

const OneFavComp = ({favourite}) => {
     const { moviePoster, movieTitle, movieGenre, movieDuration, movieReleaseyear, movieRating, movieDetails } =
    favourite;


    console.log(favourite);

  return (
    <div>
      <h2>All favourite page here: </h2>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={moviePoster}
            alt="Movie"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{movieTitle}</h2>
          <p>
            {movieDetails}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">See Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneFavComp;
