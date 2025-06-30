import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  const { _id, movieTitle, moviePoster, movieGenre, movieDuration, movieReleaseyear, movieRating,  movieDetails } =
   movie;

  const handleUpdateMovie = (event) => {
    event.preventDefault();

    const form = event.target;

    const movieTitle = form.movietitle.value;
    const moviePoster = form.movieposter.value;
    const movieGenre = form.genre.value;
    const movieDuration = form.duration.value;
    const movieReleaseyear = form.releaseyear.value;
    const movieRating = form.rating.value;
    const movieDetails = form.details.value;

    const updatedMovie = {
      movieTitle,
      moviePoster,
     movieGenre,
      movieDuration,
      movieReleaseyear,
      movieRating,
      movieDetails,
    };

    console.log(updatedMovie);

    // send data to the server
    fetch(`http://localhost:5000/movies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Movie Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate('/allMovie');
      });
  };

  return (
    <div className="text-center">
      <h2>Update Movie form: </h2>

      <form
        onSubmit={handleUpdateMovie}
        className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4"
      >
        <legend className="fieldset-legend">Update Movie details</legend>

        <label className="label">MovieTitle</label>
        <input
          type="text"
          className="input w-full"
          name="movietitle"
          defaultValue={movieTitle}
          placeholder="MovieTitle"
        />

        <label className="label">Movie Poster</label>
        <input
          type="text"
          className="input w-full"
          name="movieposter"
           defaultValue={moviePoster}
          placeholder="MoviePoster"
        />

        <label className="label">Genre</label>
        <input
          type="text"
          className="input w-full"
          name="genre"
          placeholder="Genre"
        />

        <label className="label">Duration</label>
        <input
          type="text"
          className="input w-full"
          name="duration"
          placeholder="Duration"
        />

        <label className="label">Release Year</label>
        <input
          type="text"
          className="input w-full"
          name="releaseyear"
          placeholder="Release Year"
        />

        <label className="label">Rating</label>
        <input
          type="text"
          className="input w-full"
          name="rating"
          placeholder="Rating"
        />

        <label className="label">Details</label>
        <input
          type="text"
          className="input w-full"
          name="details"
          placeholder="Details"
        />

        <input
          className="btn btn-neutral mt-4"
          type="submit"
          value="Update the Movie"
        />

        {/* <button className="btn btn-neutral mt-4">Login</button> */}
      </form>
    </div>
  );
};

export default UpdateMovie;
