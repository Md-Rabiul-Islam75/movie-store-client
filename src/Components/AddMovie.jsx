import React from "react";
import { data } from "react-router-dom";

const AddMovie = () => {
 //  const { id, moviePoster, movieTitle, genre, duration, releaseYear, rating } =
   // movie;


   const handleSubmit = (e) => {
    e.preventDefault();
     const form = e.target;
     
     const movieTitle = form.movietitle.value;
     const moviePoster = form.movieposter.value;
     const movieGenre = form.genre.value;
     const movieDuration = form.duration.value;
     const movieReleaseyear = form.releaseyear.value;
     const movieRating = form.rating.value;
     const movieDetails = form.details.value;
     


     const newMovie = {movieTitle, moviePoster, movieGenre, movieDuration, movieReleaseyear, movieRating, movieDetails};
     console.log(newMovie);

     // send data to server
     fetch('http://localhost:5000/movies', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newMovie)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('Movie added successfully.')
        }
     })
     
     

   }
  return (
    <div className="text-center">
      <h2>Add a Movie form: </h2>

      <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 mx-auto border p-4">
        <legend className="fieldset-legend">Add Movie details</legend>

        <label className="label">MovieTitle</label>
        <input type="text" className="input w-full" name="movietitle" placeholder="MovieTitle" />

        <label className="label">Movie Poster</label>
        <input type="text" className="input w-full" name="movieposter" placeholder="MoviePoster" />

        <label className="label">Genre</label>
        <input type="text" className="input w-full" name="genre" placeholder="Genre" />

        <label className="label">Duration</label>
        <input type="text" className="input w-full" name="duration" placeholder="Duration" />

        <label className="label">Release Year</label>
        <input type="text" className="input w-full" name="releaseyear" placeholder="Release Year" />

        <label className="label">Rating</label>
        <input type="text" className="input w-full" name="rating" placeholder="Rating" />

        <label className="label">Details</label>
        <input type="text" className="input w-full" name="details" placeholder="Details" />

        
        
        <input className="btn btn-neutral mt-4" type="submit" value="Add Movie" />
        
        {/* <button className="btn btn-neutral mt-4">Login</button> */}
      </form>
    </div>
  );
};

export default AddMovie;
